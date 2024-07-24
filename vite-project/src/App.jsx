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

function App() {
  let [isAuth, setIsAuth] = useState(true);

  function changeAuth () {
    setIsAuth(!isAuth);
  }

  return (
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth}/>}>
        <Route path="/" element={<MainPage />}>
          <Route path="card/:id" element={<CardId />} />
          <Route path="exit" element={<Exit exitFunc={changeAuth}/>} />
        </Route>
        </Route>
        <Route path="/login" element={<Login loginFunc={changeAuth}/>} />
        <Route path="/registration" element={<Registration loginFunc={changeAuth}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
