import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage.jsx";
import { NotFoundPage } from "./pages/NotFound.jsx";
import { Login } from "./pages/Login.jsx";
// import { Logout } from "./pages/Logout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;
