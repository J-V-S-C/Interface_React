import styled from "styled-components";
import { Link } from "react-router-dom";



export const DivMain = styled.main`

   background-color: rgb(5, 5, 5);
   padding-bottom : 50px;
   box-shadow: 0 6px 10px 0 rgb(225, 225, 20, 1), 0 6px 20px 0 rgb(225, 255, 20, 0.5);

   @media (max-width: 800px){
     
   }

`

export const DivSearch = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    svg{
        margin-top: 20px;
        color: yellow;
    }
   @media (max-width: 800px){
        gap: 20px;
    }


`

export const NavStyled = styled.nav`

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 140px;

    .configLink{
        &:hover{
            color: aqua;
            opacity: 90%;
        }
    }
    #amount{
        width: 20px;
        height: 20px;
        background: yellow;
        text-align: center;
        margin: 0 auto;
        margin-left: 15px;
        color: black;
        border-radius: 50%;
        line-height: 20px;
        margin-top: -10px;
        margin-left: 23px;
    }

    
    a{
        text-decoration: none;
        color: yellow;
    }

    div{
        display: flex;
        align-items: center;
        gap: 40px;
    }

    svg{
        margin-top: 10px;
        vertical-align: middle;
    }

    .cart{
        margin-top: 10px;
    }


   @media (max-width: 800px){
     gap: 70px;

   }

 
`


export const InputSearch = styled.input`

    margin-top: 30px;
    height: 30px;
    width: 50%;
    border-radius: 8px;

   @media (max-width: 800px){
    width: 80%;
   }


`
export const DivLink = styled.div`
`