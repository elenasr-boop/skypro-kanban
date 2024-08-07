import { useParams } from "react-router-dom"
import PopBrowse from "../components/popUps/popBrowse/popBrowse.jsx"

export function CardId ( {cards} ) {
    let {id}=useParams();

    return (
        <PopBrowse id={id} cards={cards}/>
    )
}