import React from "react";
import { IToDo, ToDos } from "./api";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

interface IProps {
    todos: ToDos[];
    part: string;
    id: string;
    title: string;
    query: string;
};

const Input = styled.input`

`;

function List({ todos, part, id, title }: IProps) {
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
            <div>
                <h1>{title}</h1>
                <ul>
                    {todos.map((todo: ToDos) => (
                        <li>
                            <h2>{todo._id}: {todo.제목}</h2>
                            <p>{todo.날짜}</p>
                            <button data-id={todo._id} onClick={onClick}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
            <form action="/add" method="POST">
                <Input type="text" name="title" />
                <Input type="text" name="date" />
                <button>추가</button>
            </form>
        </>
    )
}

export default List