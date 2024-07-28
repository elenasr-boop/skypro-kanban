import {
  Entrance,
  ErrorMessage,
  InnerBlock,
  LoginBlock,
  LoginButton,
  LoginInput,
  LoginInputs,
  MainBlock,
  RegisterLink,
  RegisterText,
} from "./authorization.styled";
import { useState } from "react";
import { auth } from "../../api";
import { useNavigate } from "react-router-dom";

export function Authorization({ loginFunc }) {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const [authData, setAuthData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAuthData({
      ...authData,
      [name]: value,
    });
    setIsError(false);
  };

  async function clickOnButton () {
    const result = await auth ( {login: authData.login, password: authData.password} );
    
    if (result === 201) {
      loginFunc();
      navigate("/");
      setIsError(false);
    } else {
      setIsError(true);
    }
  }

  return (
    <LoginBlock>
      <MainBlock>
        <InnerBlock>
          <Entrance>Вход</Entrance>
          <LoginInputs>
            <LoginInput placeholder="Эл. почта" value={authData.login} onChange={handleInputChange} name="login" label="Логин" $isError={isError} />
            <LoginInput placeholder="Пароль" onChange={handleInputChange} value={authData.password} name="password" label="Пароль" type="password"  $isError={isError} />
          </LoginInputs>
          { isError ? 
            <ErrorMessage>
              Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.
            </ErrorMessage> : <></>}
            <LoginButton
              onClick={() => {
                clickOnButton();
              }} disabled={isError}
            >
              Войти
            </LoginButton>
          <RegisterText>
            Нужно зарегистрироваться?{" "}
            <RegisterLink to="/registration">
              Регистрируйтесь здесь
            </RegisterLink>
          </RegisterText>
        </InnerBlock>
      </MainBlock>
    </LoginBlock>
  );
}
