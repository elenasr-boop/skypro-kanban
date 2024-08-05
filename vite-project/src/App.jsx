import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { NotFoundPage } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Exit } from "./pages/Logout";
import { Registration } from "./pages/registration";
import { CardId } from "./pages/cardPage";
import PrivateRoute from "./components/privateRoute";
import { useState } from "react";
import { UserContext } from "./context/userContext";
import PopNewCard from "./components/popUps/popNewCards/popNewCards";

function App() {
  function exitFunc() {
    localStorage.setItem("user", null);
    localStorage.setItem("token", "");
  }

  const [cards, setCards] = useState([]);
  const [user, setUser] = useState(
    localStorage.getItem("user") !== "null" ? JSON.parse(localStorage.getItem("user")) : null
  );

  function updateUser(newUser) {
    setUser(newUser);
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route
            path="/"
            element={<MainPage cards={cards} setCards={setCards} />}
          >
            <Route path="card/:id" element={<CardId cards={cards} />} />
            <Route path="exit" element={<Exit exitFunc={exitFunc} />} />
            <Route path="create" element={<PopNewCard setCards={setCards} />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
