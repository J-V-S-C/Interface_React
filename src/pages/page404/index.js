import React from "react";
import Header from "../../components/header";
import { ButtonEdited, DivMain } from "./styled";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Page404() {
  return (
    <>
      <Header />
      <DivMain>
        <h1>Essa Página não existe</h1>
        <Link to="/">
          <ButtonEdited>Voltar</ButtonEdited>
        </Link>
      </DivMain>
    </>
  );
}
