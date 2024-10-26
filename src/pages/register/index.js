import { DivMain, InputEdited, ButtonEdited } from "./styled";
import Header from "../../components/header";

export default function Cadastro() {
  return (
    <>
      <Header />

      <DivMain>
        <h1>Cadastro</h1>
        <InputEdited type="text" placeholder="Nome"></InputEdited>
        <InputEdited type="text" placeholder="Telefone"></InputEdited>
        <InputEdited type="email" placeholder="E-mail"></InputEdited>
        <InputEdited type="password" placeholder="Senha"></InputEdited>
        <ButtonEdited>
          <svg width="100%" height="100%" viewBox="0 0 400 40">
            <polyline points="406,1 406,39 -6,39 -6,1 406,1" className="line" />
          </svg>
          <span>Cadastrar</span>
        </ButtonEdited>
      </DivMain>
    </>
  );
}
