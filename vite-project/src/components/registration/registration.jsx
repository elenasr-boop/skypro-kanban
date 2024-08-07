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
  ErrorMessage,
} from "../authorization/authorization.styled";
import { useState } from "react";
import { register } from "../../api";
import { useNavigate } from "react-router-dom";

export function Register({ loginFunc }) {
  const [error, setError] = useState("");
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

    setError("");
  };

  async function clickOnButton() {
    if (
      registerData.login === "" ||
      registerData.name === "" ||
      registerData.password === ""
    ) {
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
      );
    } else {
      const result = await register({
        login: registerData.login,
        name: registerData.name,
        password: registerData.password,
      });

      if (result === 201) {
        loginFunc();
        navigate("/");
        setError("");
      } else if (result === 400) {
        setError(
          "Вы ввели почту, которая уже использовалась для регистрации. Попробуйте другую почту."
        );
      }
    }
    // setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
  }

  return (
    <LoginBlock>
      <MainBlock>
        <InnerBlock>
          <Entrance>Регистрация</Entrance>
          <LoginInputs>
            <LoginInput
              placeholder="Имя"
              value={registerData.name}
              onChange={handleInputChange}
              name="name"
              label="Имя"
              $isError={error === "" ? false : true}
            />
            <LoginInput
              placeholder="Эл. почта"
              value={registerData.login}
              onChange={handleInputChange}
              name="login"
              label="Логин"
              $isError={error === "" ? false : true}
              type="email"
            />
            <LoginInput
              placeholder="Пароль"
              onChange={handleInputChange}
              value={registerData.password}
              name="password"
              label="Пароль"
              type="password"
              $isError={error === "" ? false : true}
            />
          </LoginInputs>
          {error !== "" ? <ErrorMessage>{error}</ErrorMessage> : <></>}
          <LoginButton
            onClick={() => {
              clickOnButton();
            }}
            disabled={error === "" ? false : true}
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
