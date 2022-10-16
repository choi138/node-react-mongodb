import * as S from "./WriteStyle"



function Write() {
    return (
        <S.Wrap>
            <S.WriteWrap action="/add" method="POST">
                <div>
                    <S.Title>기록해도 안할 거 알지만</S.Title>
                    <S.ToDoDiv>
                        <S.H4>오늘의 할일</S.H4>
                        <S.Input name="title" />
                    </S.ToDoDiv>
                    <S.ToDoDiv>
                        <S.H4>Due Date</S.H4>
                        <S.Input name="date" />
                    </S.ToDoDiv>
                    <S.Button className="button">Submit</S.Button>
                </div>
            </S.WriteWrap>
        </S.Wrap>
    );
}

export default Write;