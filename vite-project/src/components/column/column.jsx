import Card from "../card/card";

const Column = ({cardList}) => {
  const arr = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];

  return (
    <>
      {arr.map((el, index) => (
          <div className="main__column column" key={index}>
            <div className="column__title">
              <p>{el.text}</p>
            </div>
            <div className="cards">
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
            </div>
          </div>
        )
      
	  )}
    </>
  );
};

export default Column;
