import React, { useState } from "react";
import Header from "../../components/header";


import {
    DivMain,
    LinkEdited,
    DivMenu,
    Nav,
    ButtonEdited,
    Img,
    InputEdited,
    ButtonForm,
    Accounts,
} from "./styled";
import { FaArrowLeft, FaArrowRight, FaArrowDown } from "react-icons/fa";

export default function UserPage() {
    const [visibleState, setVisibleState] = useState({
        name: false,
        address: false,
        tel: false,
        email: false,
        changeAccount: false,
    });

    const visibility = (value) => {
        setVisibleState((prevState) => ({
            ...prevState,
            [value]: !prevState[value],
        }));
    };

    return (
        <>
            <Header />
            <DivMain>
                <Nav>
                    <LinkEdited to="/">
                        <FaArrowLeft size={50} className="arrowEdit" />
                    </LinkEdited>
                    <LinkEdited to="/historico">Histórico</LinkEdited>
                    <hr className="Hr"></hr>
                    <LinkEdited to="/seguranca">Segurança</LinkEdited>
                    <hr className="Hr"></hr>
                    <LinkEdited to="/historico">Produtos</LinkEdited>
                </Nav>
                <DivMenu>
                    <Img
                        alt="FotoCliente"
                    ></Img>

                    <ButtonEdited onClick={() => visibility("name")}>
                        <svg width="100%" height="100%" viewBox="0 0 400 40">
                            <polyline points="399,1 399,39 -9,39 -9,1 399,1" className="line" />
                        </svg>
                        <span>Nome</span>
                        <FaArrowRight size={18} className="arrow" />
                    </ButtonEdited>

                    {visibleState.name && (
                        <formDiv>
                            <InputEdited type="text" name="name" placeholder="nome" />{" "}
                            <ButtonForm >
                                {" "}
                                Enviar
                            </ButtonForm>
                        </formDiv>
                    )}

                    <ButtonEdited onClick={() => visibility("address")}>
                        <svg width="100%" height="100%" viewBox="0 0 400 40">
                            <polyline points="399,1 399,39 -9,39 -9,1 399,1" className="line" />
                        </svg>
                        <span>Endereço</span>
                        <FaArrowRight size={18} className="arrow" />
                    </ButtonEdited>
                    {visibleState.address && (
                        <formDiv>
                            <InputEdited type="text" name="address" placeholder="endereco" />{" "}
                            <ButtonForm >
                                Enviar
                            </ButtonForm>
                        </formDiv>
                    )}

                    <ButtonEdited onClick={() => visibility("tel")}>
                        <svg width="100%" height="100%" viewBox="0 0 400 40">
                            <polyline points="399,1 399,39 -9,39 -9,1 399,1" className="line" />
                        </svg>
                        <span>Telefone</span>
                        <FaArrowRight size={18} className="arrow" />
                    </ButtonEdited>
                    {visibleState.tel && (
                        <formDiv>
                            <InputEdited type="text" name="tel" placeholder="telefone" />
                            <ButtonForm>Enviar</ButtonForm>
                        </formDiv>
                    )}

                    <ButtonEdited onClick={() => visibility("email")}>
                        <svg width="100%" height="100%" viewBox="0 0 400 40">
                            <polyline points="399,1 399,39 -9,39 -9,1 399,1" className="line" />
                        </svg>
                        <span>E-mail</span>
                        <FaArrowRight size={18} className="arrow" />
                    </ButtonEdited>
                    {visibleState.email && (
                        <formDiv>
                            <InputEdited
                                type="email"
                                name="email"
                                placeholder="email"
                            />{" "}
                            <ButtonForm >
                                Enviar
                            </ButtonForm>
                        </formDiv>
                    )}
                    <br></br>
                    <hr className="Hr"></hr>
                    <br></br>
                    <ButtonEdited onClick={() => visibility("changeAccount")}>
                        <svg width="100%" height="100%" viewBox="0 0 400 40">
                            <polyline points="399,1 399,39 -9,39 -9,1 399,1" className="line" />
                        </svg>
                        <span>Trocar Conta</span>
                        <FaArrowDown size={18} className="arrow" />
                    </ButtonEdited>
                    {visibleState.changeAccount && (
                        <Accounts>
                            <p>Account1</p>
                            <p>Account2</p>
                        </Accounts>
                    )}
                    <ButtonEdited>
                        <svg width="100%" height="100%" viewBox="0 0 400 40">
                            <polyline points="399,1 399,39 -9,39 -9,1 399,1" className="line" />
                        </svg>
                        Sair</ButtonEdited>
                </DivMenu>
            </DivMain>
            <footer
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "10em",
                }}
            >
                <p>Footer</p>
            </footer>
        </>
    );
}
