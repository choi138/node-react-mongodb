import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
    width: 100%;
    background-color: #F8F9Fa;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const NavWrap = styled.div`
    width: 99%;
    display: flex;
    align-items: center;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
`;

export const Navbar = styled.div`
    margin-left: 30px;
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Nav = styled(Link)`
    font-size: 16px;
    font-weight: 350;
    line-height: 24px;
    text-decoration: none;
    color: black;
`;

export const NavHome = styled(Nav)`
        color: #676464;
`;