import { IDetail } from "../../api";
import * as S from "./Style"

interface IProps {
    detail: IDetail;
}

function Edit(details: IProps) {

    return (
        <S.Wrap>
            <S.WriteWrap action="/edit?_method=PUT" method="POST">
                <div>
                    <S.Title>기록해도 안할 거 알지만</S.Title>
                    <S.ToDoDiv>
                        <S.H4>오늘의 할일</S.H4>
                        <S.Input type="text" value={details?.detail._id} name="id" style={{ display: "none" }} />
                        <S.Input placeholder={details?.detail.제목} name="title" />
                    </S.ToDoDiv>
                    <S.ToDoDiv>
                        <S.H4>Due Date</S.H4>
                        <S.Input placeholder={details?.detail.날짜} name="date" />
                    </S.ToDoDiv>
                    <S.Button className="button">Submit</S.Button>
                </div>
            </S.WriteWrap>
        </S.Wrap>
    );
}

export default Edit;