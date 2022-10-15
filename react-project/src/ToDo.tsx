import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getToDo, IToDo } from "./api";
import List from "./List";

function ToDo() {
    const { data: todo, isLoading: todoLoading } =
        useQuery<IToDo>(["todos", "todo"], getToDo);

    const isLoading = todoLoading || false;
    return (
        <>
            {
                isLoading ? (
                    <div>Loading</div>
                ) : (
                    <>
                        <List
                            todos={todo?.name || []}
                            part="todo"
                            id="todo"
                            title="할 일"
                            query="todo"
                        />
                    </>
                )
            }
        </>
    )
};

export default ToDo;