import Header from "../components/header/header";
import Main from "../components/main/main";
import { useEffect, useState } from "react";
import { getTodos } from "../api.js";
import { Wrapper } from "../components/main/main.styled.js";
import { GlobalStyle } from "../global.styled.js";
import { Outlet } from "react-router-dom";
import { Loading } from "../components/loading/loading.jsx";

export function MainPage( {cards, setCards} ) {
  
  const [isLoading, setIsLoading] = useState(true);

  function onAddCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Web design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };

    setCards([...cards, newCard]);
  }

  useEffect(() => {
    getTodos().then((data) => {
      setCards(data.tasks);
      setIsLoading(false);
    });
  }, [cards, setCards]);

  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Header onCardAdd={onAddCard} />

        {isLoading ? <Loading /> : <Main cardList={cards} />}

        <Outlet />
      </Wrapper>
    </>
  );
}
