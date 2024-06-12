import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { NotFoundPage } from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;
