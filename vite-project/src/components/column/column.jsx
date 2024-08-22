import { useContext } from "react";
import Card from "../card/card";
import { CardsStyled, ColumnTitle, ColumnTitleP, MainColumn } from "../column/column.styled.js";
import { CardContext } from "../../context/cardContext.jsx";

const Column = () => {
  const arr = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];
  const {cards} = useContext(CardContext); 

  return (
    <>
      {arr.map((el, index) => (
          <MainColumn key={index}>
            <ColumnTitle>
              <ColumnTitleP>{el}</ColumnTitleP>
            </ColumnTitle>
            <CardsStyled>
              {cards.map((cardEl) => {
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
