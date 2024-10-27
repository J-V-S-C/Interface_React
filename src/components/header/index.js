import { useState } from "react";
import {
  DivMain,
  InputSearch,
  DivSearch,
  NavStyled,
  DivLink,
  ButtonStyled,
  Categorias,
  DivButton,
} from "./styled";
import { FaHome, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [visibleState, setvisibleState] = useState(false);

  const visibility = () => {
    setvisibleState((prevState) => !prevState);
    //alterna cada vez q é chamado
  };

  return (
    <>
      <DivMain>
        <DivSearch>
          <Link to="/">
            <FaHome size={50} />
          </Link>
          <InputSearch type="text"></InputSearch>
          <Link to="userPage">
            <FaUser size={50} />
          </Link>
        </DivSearch>
        <NavStyled>
          <div>
            <DivButton>
              <ButtonStyled onClick={visibility} className="configHover">
                <FaBars size={20}></FaBars>
              </ButtonStyled>
              {visibleState && (
                <Categorias>
                  <Link to="*">Itens para casa</Link>
                  <Link to="*">Entreterimento</Link>
                  <Link to="*">Eletrônicos</Link>
                </Categorias>
              )}
            </DivButton>
            <Link to="*" className="configHover">
              Ofertas
            </Link>
            <Link to="*" className="configHover">
              Histórico
            </Link>
            <Link to="*" className="configHover">
              Vender
            </Link>
            <Link to="*" className="configHover">
              Suporte
            </Link>
          </div>{" "}
          <div>
            <Link to="register" className="configHover">
              Cadastrar
            </Link>
            <Link to="login" className="configHover">
              Logar
            </Link>
            <Link to="*" className="cart">
              <FaShoppingCart size={25} />
              <p id="amount">N°</p>
            </Link>
          </div>
        </NavStyled>
      </DivMain>
    </>
  );
}
