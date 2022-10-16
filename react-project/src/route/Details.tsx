import { useQuery } from "react-query";
import { PathMatch, useMatch } from "react-router-dom";
import { getDetail } from "../api";
import Detail from "../component/detail/Detail";

function Details() {
    const bigModalMatch: PathMatch<string> | null = useMatch("/detail/:id");
    const id = bigModalMatch?.params.id;

    const { data: detail } = useQuery(["detail", id], () =>
        getDetail(id || "")
    );

    return (
        <Detail
            detail={detail ?? []}
        />
    )
        ;
}

export default Details;