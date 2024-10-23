import { DivMain, InputSearch, DivSearch, NavStyled, DivLink } from "./styled";
import {FaHome, FaShoppingCart, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Header(){



    return(
        <>
            <DivMain>
                    <DivSearch>
                        <Link to="/">
                            <FaHome size={50} />
                        </Link>
                        <InputSearch type="text"></InputSearch>
                        <Link to="/login">
                            <FaUser size={50} />
                        </Link>
                    </DivSearch>
                    <NavStyled>
                        <div>
                            <Link to="" className='configLink'>Categorias</Link>
                            <Link to="" className='configLink'>Ofertas</Link>
                            <Link to="" className='configLink'>Histórico</Link>
                            <Link to="" className='configLink'>Vender</Link>
                            <Link to="" className='configLink'>Suporte</Link>
                        </div>
                        {" "}
                        <div>
                            <Link to="" className='configLink'>Cadastrar</Link>
                            <Link to="" className='configLink'>Logar</Link>
                            <Link to="" className="cart">
                                <FaShoppingCart size={25}/>
                                <p id="amount">N°</p>
                            </Link>
                    </div>
                </NavStyled>
            </DivMain>

        
        </>
    )
}