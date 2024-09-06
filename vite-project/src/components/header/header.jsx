import { useContext, useState } from "react";
import * as S from "./header.styled.js";
import { Container } from "../main/main.styled.js";
import { ExitButton, ExitButtonA, UserSetMail, UserSetName } from "./popUser.styled.js";
import { UserContext } from "../../context/userContext.jsx";

const Header = () => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const toggleDropdown = () => setIsUserOpen((prevState) => !prevState);
  const {user} = useContext(UserContext);

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <div className=" _show _light">
            <a href="" target="_self">
              <S.HeaderLogo src="../../logo.png" alt="logo" />
            </a>
          </div>
          <div className=" _dark">
            <a href="" target="_self">
              <S.HeaderLogo src="../../logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <S.HeaderBtnMainNew id="btnMainNew">
              <S.HeaderBtnMainNewA to="/create">Создать новую задачу</S.HeaderBtnMainNewA>
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={toggleDropdown}>
              {user.name}
            </S.HeaderUser>
            {isUserOpen && (<S.HeaderPopUserSet>
              <UserSetName>{user.name}</UserSetName>
              <UserSetMail>{user.login}</UserSetMail>
              <ExitButton type="button">
                <ExitButtonA to="/exit">Выйти</ExitButtonA>
              </ExitButton>
            </S.HeaderPopUserSet>)}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;
