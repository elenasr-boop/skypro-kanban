import { createContext } from "react";
import { useState } from "react";

export const CardContext = createContext(null);

function getCards() {
    try {
        return JSON.parse(localStorage.getItem('cards'));
    } catch (_) {
        return [];
    }
}

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState(getCards());

    function setcards (cards) {
        localStorage.setItem('cards', JSON.stringify(cards));
        setCards(cards);
    }

    return <CardContext.Provider value={{cards, setcards}}>{children}</CardContext.Provider>
}