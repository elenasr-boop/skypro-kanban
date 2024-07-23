import {
  Entrance,
  InnerBlock,
  LoginBlock,
  LoginButton,
  LoginInput,
  LoginInputs,
  MainBlock,
  RegisterLink,
  RegisterText,
} from "./authorization.styled";

export function Authorization() {
  return (
    <LoginBlock>
      <MainBlock>
        <InnerBlock>
          <Entrance>Вход</Entrance>
          <LoginInputs>
            <LoginInput placeholder="Эл. почта"></LoginInput>
            <LoginInput placeholder="Пароль"></LoginInput>
          </LoginInputs>
          <LoginButton>Войти</LoginButton>
          <RegisterText>Нужно зарегистрироваться? <RegisterLink to="/registration">Регистрируйтесь здесь</RegisterLink></RegisterText>
        </InnerBlock>
      </MainBlock>
    </LoginBlock>
  );
}
