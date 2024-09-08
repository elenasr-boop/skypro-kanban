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
import { auth } from "../../api.js";
import { UserContext } from "../../context/userContext";
import { deleteSpaces, safeString } from "../../helpers.js";
import { useNavigate } from "react-router-dom";

export function Authorization() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

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
    setError(null);
  };

  async function clickOnButton() {
    if (
      deleteSpaces({ str: authData.login }) === "" ||
      deleteSpaces({ str: authData.password }) === ""
    ) {
      setError({
        text: "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.",
        login: deleteSpaces({ str: authData.login }) === "",
        password: deleteSpaces({ str: authData.password }) === "",
      });
    } else {
      try {
        setError(null);
        const result = await auth({
          login: safeString({ str: deleteSpaces({ str: authData.login }) }),
          password: safeString({
            str: deleteSpaces({ str: authData.password }),
          }),
        });
        if ("error" in result) {
          throw new Error(result.error);
        }
        loginUser(result.user);
        navigate("/");
      } catch (e) {
        let text = "";
        if (e.message === "Failed to fetch") {
          text = "Проверьте подключение к интернету или попробуйте позже";
        } else {
          text = e.message;
        }
        setError({ text: text, login: true, password: true });
      }
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
              $isError={error !== null && error.login}
            />
            <LoginInput
              placeholder="Пароль"
              onChange={handleInputChange}
              value={authData.password}
              name="password"
              label="Пароль"
              type="password"
              $isError={error !== null && error.password}
            />
          </LoginInputs>
          {error !== null ? <ErrorMessage>{error.text}</ErrorMessage> : <></>}
          <LoginButton
            onClick={() => {
              clickOnButton();
            }}
            disabled={error !== null}
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
