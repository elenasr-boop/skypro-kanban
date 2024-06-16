import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { NotFoundPage } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Exit } from "./pages/Logout";
import { Registration } from "./pages/registration";
import { CardId } from "./pages/cardPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="part/:id" element={<CardId />} />
          <Route path="exit" element={<Exit />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
