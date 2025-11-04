import { useState } from "react";
import { InputText } from "../../../shared/components/input";

export function LoginForm(){
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)

    return(
        <form>
            <InputText label="This is a input" type="text"/>
        </form>
    )
}