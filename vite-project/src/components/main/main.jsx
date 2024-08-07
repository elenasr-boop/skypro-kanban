import Column from "../column/column";
import * as S from "./main.styled.js"

const Main = () => {
  return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            <Column />
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
};

export default Main;
