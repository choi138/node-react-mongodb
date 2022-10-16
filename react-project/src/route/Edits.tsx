import Edit from "../component/writeForm/Edit"
import { useMatch, PathMatch } from "react-router-dom";
import { getDetail } from "../api";
import { useQuery } from "react-query";
function Edits() {
    const bigModalMatch: PathMatch<string> | null = useMatch("/edit/:id");
    const id = bigModalMatch?.params.id;

    const { data: detail } = useQuery(["detail", id], () =>
        getDetail(id || "")
    );

    return (
        <Edit
            detail={detail ?? []}
        />
    )
}

export default Edits