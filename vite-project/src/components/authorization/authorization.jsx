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
import { useContext, useState } from "react";
import { auth } from "../../api";
import { UserContext } from "../../context/userContext";

export function Authorization() {
  const [isError, setIsError] = useState(false);
  const {loginUser} = useContext(UserContext);

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

  async function clickOnButton() {
    if (authData.login.replaceAll(/\s+/g, '') === "" || authData.password.replaceAll(/\s+/g, '') === "") {
      setIsError(true);
    } else {
      try {
        const result = await auth({
          login: authData.login.replaceAll(/\s+/g, '').replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;"),
          password: authData.password.replaceAll(/\s+/g, '').replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;"),
        });
        loginUser(result.user);
      } catch (_) {
        setIsError(true);
      }

      // if (result === 201) {
      //   navigate("/");
      //   setIsError(false);
      // } else {
      //   setIsError(true);
      // }
    }
  }

  return (
    <LoginBlock>
      <MainBlock>
        <InnerBlock>
          <Entrance>Вход</Entrance>
          <LoginInputs>
            <LoginInput
              placeholder="Эл. почта"
              value={authData.login}
              onChange={handleInputChange}
              name="login"
              label="Логин"
              $isError={isError}
            />
            <LoginInput
              placeholder="Пароль"
              onChange={handleInputChange}
              value={authData.password}
              name="password"
              label="Пароль"
              type="password"
              $isError={isError}
            />
          </LoginInputs>
          {isError ? (
            <ErrorMessage>
              Введенные вами данные не распознаны. Проверьте свой логин и пароль
              и повторите попытку входа.
            </ErrorMessage>
          ) : (
            <></>
          )}
          <LoginButton
            onClick={() => {
              clickOnButton();
            }}
            disabled={isError}
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
