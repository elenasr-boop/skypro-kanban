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
        <Header />

        {isLoading ? <Loading /> : <Main cardList={cards} />}

        <Outlet />
      </Wrapper>
    </>
  );
}
