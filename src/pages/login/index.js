import React, { useState } from "react";
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
                    <svg width="100%" height="100%" viewBox="0 0 400 40" className="border">
                        <polyline points="399,1 399,39 1,39 1,1 399,1" />
                    </svg>
                    <span>Enviar</span>
               </ButtonEdited> 
            </DivMain>

        </>
    )
}