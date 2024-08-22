import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

function getUser () {
    try {
        return JSON.parse(localStorage.getItem('user'));
    } catch (_) {
        return null;
    }
}

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
  const [user, setUser] = useState(
    getUser()
  );

  function loginUser(newUser) {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/");
  }

  function exitFunc() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return <UserContext.Provider value={{loginUser, user, exitFunc}}>{children}</UserContext.Provider>;
};
