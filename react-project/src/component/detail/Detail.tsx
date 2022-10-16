import { IDetail } from "../../api";
import { PathMatch, useMatch } from "react-router-dom";

interface IProps {
    detail: IDetail;
}

function Detail(details: IProps) {
    const modalMatch: PathMatch<string> | null = useMatch("/detail/:id");
    const id = modalMatch?.params.id;

    return (
        <div style={{ border: "1px soild gray" }}>
            <p>{details?.detail._id}</p>
            <h3>{details?.detail.제목}</h3>
            <p>{details?.detail.날짜}</p>
        </div>
    )
}

export default Detail;