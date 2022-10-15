const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'react-project/build')));
app.use(express.json());
let cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const MongoClient = require('mongodb').MongoClient;

let db;

MongoClient.connect(`mongodb+srv://kidjustinchoi:kidjustin0524@cluster0.s2yc1kc.mongodb.net/todoapp?retryWrites=true&w=majority`, (error, result) => {
    if (error) return console.log(error);
    db = result.db('todoapp');
    app.listen(2000, () => {
        console.log('Server is running on port 2000');
    })
});



app.get('/detail', (req, res) => {
    db.collection('post').find().toArray((error, result) => { // post라는 collectoin안의 모든 데이터를 가져옴
        console.log(result); // 가져온 데이터를 콘솔에 출력
        console.log(error)
        res.json({ name: result });
    });

})

app.post('/add', (req, res) => { // POST요청 처리를 하려면 app.post를 사용
    res.send('전송완료');
    db.collection('counter').findOne({ name: '게시물갯수' }, (error, result) => {
        console.log(result.totalPost);
        let totalPost = result.totalPost;
        db.collection('post').insertOne({ _id: totalPost + 1, 제목: req.body.title, 날짜: req.body.date }, (error, result) => {
            // post라는 파일에 InsertOne{자료}로 저장
            console.log('포스트에 저장완료'); //post라는 파일에 InsertOne{자료}로 저장
            db.collection('counter').updateOne({ name: '게시물갯수' }, { $inc: { totalPost: 1 } }, (error, result) => {
                if (error) return console.log(error);
            });
        });
        // console.log(req.body.title) // req.body로 POST요청의 body를 받아올 수 있다.
    })

});

app.delete('/delete', (req, res) => {
    console.log(req.body);
    req.body._id = parseInt(req.body._id);
    db.collection('post').deleteOne(req.body, (error, result) => {
        console.log(error);
        res.status(200).send({ message: '성공했습니다.' });
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'react-project/build/index.html'));
    // console.log('Serving index.html');
});