import { Link } from "react-router-dom";
import { ExitNo, ExitYes, PopExit, PopExitBlock, PopExitContainer, PopExitFormGroup, PopExitTtl } from "./popUser.styled";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";


const PopUser = () => {
  const {exitFunc} = useContext(UserContext);

  return (
    <PopExit>
      <PopExitContainer>
        <PopExitBlock>
          <div>
            <PopExitTtl>Выйти из аккаунта?</PopExitTtl>
          </div>
          <form id="formExit" action="#">
            <PopExitFormGroup>
              <ExitYes id="exitYes" onClick={exitFunc}>
                <Link to="/login" >Да, выйти</Link>
              </ExitYes>
              <ExitNo id="exitNo">
                <Link to="/">Нет, остаться</Link>
              </ExitNo>
            </PopExitFormGroup>
          </form>
          </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
};

export default PopUser;
