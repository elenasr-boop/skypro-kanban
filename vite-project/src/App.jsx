import "./App.css";
import Header from "./components/header/header";
import PopBrowse from "./components/popUps/popBrowse/popBrowse";
import PopNewCard from "./components/popUps/popNewCards/popNewCards";
import PopUser from "./components/popUps/popUser/popUser";
import Main from "./components/main/main";
import { useEffect, useState } from "react";
import { cardList } from "./data";

function App() {
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

  return (
    <div className="wrapper">
      <PopUser></PopUser>

      <PopNewCard></PopNewCard>

      <PopBrowse></PopBrowse>

      <Header onCardAdd={onAddCard} />
      {isLoading ? <div>Данные загружаются</div>: <Main cardList={cards}/>}
    </div>
  );
}

export default App;
