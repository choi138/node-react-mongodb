import * as S from "./HeaderStyle";

function Header() {
    return (
        <S.Wrap>
            <S.NavWrap>
                <S.Title>ToDo App</S.Title>
                <S.Navbar>
                    <S.Nav to="/">Home</S.Nav>
                    <S.NavHome to="/write">Write</S.NavHome>
                    <S.NavHome to="/list">List</S.NavHome>
                </S.Navbar>
            </S.NavWrap>

        </S.Wrap>
    );
}

export default Header;