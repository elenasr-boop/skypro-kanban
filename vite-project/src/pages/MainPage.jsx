import Header from "../components/header/header";
import Main from "../components/main/main";
import { useEffect, useState } from "react";
import { cardList, getTodos } from "../api.js";
import { Wrapper } from "../components/main/main.styled.js";
import { GlobalStyle } from "../global.styled.js";
import { Outlet } from "react-router-dom";
import { Loading } from "../components/loading/loading.jsx";

export function MainPage() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  function onAddCard() {
    console.log("Добавляется задача");

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
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    getTodos().then((data) => setCards(data.tasks));
  }, [cards]);

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
