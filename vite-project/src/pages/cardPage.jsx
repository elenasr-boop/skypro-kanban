import { useParams } from "react-router-dom"
import PopBrowse from "../components/popUps/popBrowse/popBrowse.jsx"

export function CardId () {
    let {id}=useParams();

    return (
        <PopBrowse id={id} />
    )
}