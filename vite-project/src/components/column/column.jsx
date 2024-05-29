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
              {cardList.map((cardEl, index) => {
                if (cardEl.status === el) {
                  return (<Card
                  category={cardEl.theme}
                  description={cardEl.title}
                  date={cardEl.date}
                  key={cardEl.id}
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
