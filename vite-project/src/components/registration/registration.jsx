import { MainBlock } from "./registration.styled";
import { Entrance, InnerBlock, LoginBlock, LoginButton, LoginInput, LoginInputs, RegisterLink, RegisterText } from "../authorization/authorization.styled";

export function Register() {
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
            <LoginButton>Зарегистрироваться</LoginButton>
            <RegisterText>Уже есть аккаунт? <RegisterLink to="/login">Войдите здесь</RegisterLink></RegisterText>
        </InnerBlock>
      </MainBlock>
    </LoginBlock>
  );
}
