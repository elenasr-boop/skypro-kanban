import { Authorization } from "../components/authorization/authorization"

export function Login ( {loginFunc} ) {
    return (
        <Authorization loginFunc={loginFunc}/>
    )
}