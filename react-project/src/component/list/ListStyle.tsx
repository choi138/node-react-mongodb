import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`;

export const Title = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
`;

export const ListWrap = styled.div`
    width: 75%;
    border-radius: 10px 10px 0 0;
    border: 1px solid #a5a2a2;
    padding: 10px;
`;

export const Date = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 18px;
    &:hover {
        cursor: default;
    }
`;

export const WirteCount = styled(Date)`
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #757272;
    }
`;

export const TitleText = styled.h2`
    font-size: 25px;
    font-weight: 450;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    padding: 9px 13px;
    border-radius: 5px;
    background-color: #DC3545;
    border: none;
    color: white;
    margin-left: 3px;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #b42c3a;
    }
`;
