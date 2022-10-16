import React from "react";
import { IToDo, ToDos } from "../../api";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import * as S from "./ListStyle";


interface IProps {
    todos: ToDos[];
    part: string;
    id: string;
    title: string;
    query: string;
};


function List({ todos, part, id, title }: IProps) {
    const history = useNavigate();
    const boxClick = (id: number) => {
        history(`/detail/${id}`);
    }

    const onClick = (e: any) => {
        let writeCount = e.target.dataset.id; //
        let nowClick = e.target;
        axios.delete('/delete', {
            data: { _id: writeCount }
        }).then(res => {
            nowClick.parentElement.style.display = 'none'; // 
            console.log('성공했지롱');
        }).catch(err => {
            console.log('헉 뭔가 잘못됐지롱')
            console.log(err);
        });
    }

    return (
        <>
            <S.Wrap>
                <S.Title>서버에서 가져온 할일 리스트</S.Title>
                {todos.map((todo: ToDos) => (

                    <>
                        <S.ListWrap>
                            <S.WirteCount onClick={() => boxClick(todo._id)}>글번호 : {todo._id}</S.WirteCount>
                            <S.TitleText>할일 제목 : {todo.제목}</S.TitleText>
                            <S.Date>할일 마감날짜 : {todo.날짜}</S.Date>
                            <S.Button data-id={todo._id} onClick={onClick}>삭제</S.Button>
                            <S.Button>수정</S.Button>
                        </S.ListWrap>
                    </>

                ))}
            </S.Wrap>
        </>
    )
}

export default List