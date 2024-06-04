import { useState } from "react";
import * as S from "./header.styled.js";
import { Container } from "../main/main.styled.js";


const Header = ( {onCardAdd}) => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const toggleDropdown = () => setIsUserOpen((prevState) => !prevState);

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <div className=" _show _light">
            <a href="" target="_self">
              <S.HeaderLogo src="../../public/logo.png" alt="logo" />
            </a>
          </div>
          <div className=" _dark">
            <a href="" target="_self">
              <S.HeaderLogo src="../../public/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <S.HeaderBtnMainNew className=" _hover01" id="btnMainNew" onClick={onCardAdd}>
              <S.HeaderBtnMainNewA href="#">Создать новую задачу</S.HeaderBtnMainNewA>
            </S.HeaderBtnMainNew>
            <S.HeaderUser href="#user-set-target" className=" _hover02" onClick={toggleDropdown}>
              Ivan Ivanov
            </S.HeaderUser>
            {isUserOpen && (<S.HeaderPopUserSet
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </S.HeaderPopUserSet>)}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;
