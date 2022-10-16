import styled from "styled-components";

export const Wrap = styled.div`
    width: 100%;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const WriteWrap = styled.form`
    width: 100%;
    max-width: 70%;
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
`;

export const H4 = styled.h4`
    font-weight: 350;
    font-size: 16px;
    margin: 0;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 4.5px;
    padding-left: 10px;
    padding: 5px;
`;

export const ToDoDiv = styled.div`
    margin-bottom: 20px;
`;

export const Button = styled.button`
    margin-top: 10px;
    background-color: tomato;
    border-radius: 3px;
    border: none;
    color: #fafafa;
    font-weight: 350;
    padding: 3px 5px;
    font-size: 1vw;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #eb3414;
    }
`;