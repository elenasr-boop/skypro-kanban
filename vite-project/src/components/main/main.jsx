import Column from "../column/column";
import * as S from "./main.styled.js"

const Main = ({cardList}) => {
  return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            <Column cardList={cardList}></Column>
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
};

export default Main;
