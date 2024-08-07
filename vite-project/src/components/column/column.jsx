import Card from "../card/card";
import { CardsStyled, ColumnTitle, ColumnTitleP, MainColumn } from "../column/column.styled.js";

const Column = ({cardList}) => {
  const arr = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];

  return (
    <>
      {arr.map((el, index) => (
          <MainColumn key={index}>
            <ColumnTitle>
              <ColumnTitleP>{el}</ColumnTitleP>
            </ColumnTitle>
            <CardsStyled>
              {cardList.map((cardEl) => {
                if (cardEl.status === el) {
                  return (<Card
                  card={cardEl}
                  id={cardEl._id}
                  key={cardEl._id}
                ></Card>)
                }
              }
                )}
            </CardsStyled>
          </MainColumn>
        )
      )}
    </>
  );
};

export default Column;
