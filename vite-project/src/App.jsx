import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { NotFoundPage } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Exit } from "./pages/Logout";
import { Registration } from "./pages/registration";
import { CardId } from "./pages/cardPage";
import PrivateRoute from "./components/privateRoute";
import { UserProvider } from "./context/userContext.jsx";
import PopNewCard from "./components/popUps/popNewCards/popNewCards";
import { CardProvider } from "./context/cardContext.jsx";

function App() {
  return (
    <UserProvider>
      <CardProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              path="/"
              element={<MainPage />}
            >
              <Route
                path="card/:id"
                element={<CardId />}
              />
              <Route path="exit" element={<Exit />} />
              <Route
                path="create"
                element={<PopNewCard />}
              />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CardProvider>
    </UserProvider>
  );
}

export default App;
