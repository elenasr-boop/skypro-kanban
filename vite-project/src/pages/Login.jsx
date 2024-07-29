import { Authorization } from "../components/authorization/authorization.jsx"

export function Login ( {loginFunc} ) {
    return (
        <Authorization loginFunc={loginFunc}/>
    )
}