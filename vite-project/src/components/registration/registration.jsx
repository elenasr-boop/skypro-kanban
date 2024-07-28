import { MainBlock } from "./registration.styled";
import {
  Entrance,
  InnerBlock,
  LoginBlock,
  LoginButton,
  LoginInput,
  LoginInputs,
  RegisterLink,
  RegisterText,
  ErrorMessage
} from "../authorization/authorization.styled";
import { useState } from "react";
import { register } from "../../api";
import { useNavigate } from "react-router-dom";

export function Register({ loginFunc }) {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    login: "",
    name: "",
    password: "", 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
    setIsError(false);
  };

  async function clickOnButton () {
    const result = await register ( {login: registerData.login, name: registerData.name, password: registerData.password} );

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
          <Entrance>Регистрация</Entrance>
          <LoginInputs>
            <LoginInput placeholder="Имя" value={registerData.name} onChange={handleInputChange} name="name" label="Имя" $isError={isError} />
            <LoginInput placeholder="Эл. почта" value={registerData.login} onChange={handleInputChange} name="login" label="Логин" $isError={isError} type="email" />
            <LoginInput placeholder="Пароль" onChange={handleInputChange} value={registerData.password} name="password" label="Пароль" type="password"  $isError={isError} />
          </LoginInputs>
          { isError ? 
            <ErrorMessage>
              Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.
            </ErrorMessage> : <></>}
            <LoginButton
              onClick={() => {
                clickOnButton();
              }}
              disabled={isError}
            >
              Зарегистрироваться
            </LoginButton>
          <RegisterText>
            Уже есть аккаунт?{" "}
            <RegisterLink to="/login">Войдите здесь</RegisterLink>
          </RegisterText>
        </InnerBlock>
      </MainBlock>
    </LoginBlock>
  );
}
