import { MainBlock } from "./registration.styled";
import {
  ButtonLink,
  Entrance,
  InnerBlock,
  LoginBlock,
  LoginButton,
  LoginInput,
  LoginInputs,
  RegisterLink,
  RegisterText,
} from "../authorization/authorization.styled";

export function Register({ loginFunc }) {
  return (
    <LoginBlock>
      <MainBlock>
        <InnerBlock>
          <Entrance>Регистрация</Entrance>
          <LoginInputs>
            <LoginInput placeholder="Имя" />
            <LoginInput placeholder="Эл. почта" />
            <LoginInput placeholder="Пароль" />
          </LoginInputs>
          <ButtonLink to="/">
            <LoginButton
              onClick={() => {
                loginFunc();
              }}
            >
              Зарегистрироваться
            </LoginButton>
          </ButtonLink>
          <RegisterText>
            Уже есть аккаунт?{" "}
            <RegisterLink to="/login">Войдите здесь</RegisterLink>
          </RegisterText>
        </InnerBlock>
      </MainBlock>
    </LoginBlock>
  );
}
