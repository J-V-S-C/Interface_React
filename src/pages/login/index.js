import React from "react";
import Header from "../../components/header"
import { DivMain, InputEdited, ButtonEdited} from "./style"

export default function Login(){


    return (
        <>
            <Header/>
            <DivMain>
                <h1>Login</h1>
                <InputEdited type="email" placeholder="E-mail"></InputEdited>
                <InputEdited type="password" placeholder="Senha"></InputEdited>
                <ButtonEdited>
                    <svg width="100%" height="100%" viewBox="0 0 400 40"> 
                        <polyline points="406,1 406,39 -6,39 -6,1 406,1" className="line" />
                    </svg>
                    <span>Logar</span>
               </ButtonEdited> 
            </DivMain>

        </>
    )
}