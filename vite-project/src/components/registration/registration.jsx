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
import { useContext, useState } from "react";
import { register } from "../../api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { deleteSpaces, safeString } from "../../helpers";

export function Register() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {loginFunc} = useContext(UserContext);

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
    setError(null);
  };

  async function clickOnButton() {
    if (
      deleteSpaces( {str: registerData.login} )  === "" ||
      deleteSpaces( {str: registerData.name} ) === "" ||
      deleteSpaces( {str: registerData.password} ) === ""
    ) {
      setError({text: "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.", 
        login: deleteSpaces( {str: registerData.login} )  === "",
        name: registerData.name.trim()  === "",
        password: deleteSpaces( {str: registerData.password} )  === "",
      });
    } else {
      try {
        await register({
          login: safeString( {str: deleteSpaces( {str: registerData.login} )} ),
          name: registerData.name.trim(),
          password: safeString({str: deleteSpaces( {str: registerData.password} )}),
        });
        loginFunc();
        navigate("/");
        setError("");
      } catch (_) {
        setError({text: "Пользователь с таким логином уже существует.", login: true});
      }
    }
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
              $isError={error !== null && ('name' in error ? error.name : error.name) }
            />
            <LoginInput
              placeholder="Эл. почта"
              value={registerData.login}
              onChange={handleInputChange}
              name="login"
              label="Логин"
              $isError={error !== null && ('login' in error ? error.login : error.login)}
              type="email"
            />
            <LoginInput
              placeholder="Пароль"
              onChange={handleInputChange}
              value={registerData.password}
              name="password"
              label="Пароль"
              type="password"
              $isError={error !== null && ('password' in error ? error.password : error.password)}
            />
          </LoginInputs>
          {error !== null ? <ErrorMessage>{error.text}</ErrorMessage> : <></>}
          <LoginButton
            onClick={() => {
              clickOnButton();
            }}
            disabled={error !== null}
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
