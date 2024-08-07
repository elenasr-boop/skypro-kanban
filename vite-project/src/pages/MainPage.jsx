import Header from "../components/header/header";
import Main from "../components/main/main";
import { useContext, useEffect, useState } from "react";
import { getTodos } from "../api.js";
import { Wrapper } from "../components/main/main.styled.js";
import { GlobalStyle } from "../global.styled.js";
import { Outlet } from "react-router-dom";
import { Loading } from "../components/loading/loading.jsx";
import { CardContext, UserContext } from "../context/userContext.jsx";

export function MainPage() {
  const {user} = useContext(UserContext);
  const {setCards} = useContext(CardContext); 
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTodos( {token: user.token} ).then((data) => {
      setCards(data.tasks);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Header />

        {isLoading ? <Loading /> : <Main />}

        <Outlet />
      </Wrapper>
    </>
  );
}
