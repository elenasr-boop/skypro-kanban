import {
  ButtonLink,
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

export function Authorization({ loginFunc }) {
  return (
    <LoginBlock>
      <MainBlock>
        <InnerBlock>
          <Entrance>Вход</Entrance>
          <LoginInputs>
            <LoginInput placeholder="Эл. почта" />
            <LoginInput placeholder="Пароль" />
          </LoginInputs>
          <ButtonLink to="/">
            <LoginButton
              onClick={() => {
                loginFunc();
              }}
            >
              Войти
            </LoginButton>
          </ButtonLink>
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
