import "./App.css";
import Header from "./components/header/header";
import PopBrowse from "./components/popUps/popBrowse/popBrowse";
import PopNewCard from "./components/popUps/popNewCards/popNewCards";
import PopUser from "./components/popUps/popUser/popUser";
import Main from "./components/main/main";

function App() {
  return (
    <div className="wrapper">
      <PopUser></PopUser>

      <PopNewCard></PopNewCard>

      <PopBrowse></PopBrowse>

      <Header />
      <Main />
    </div>
  );
}

export default App;
