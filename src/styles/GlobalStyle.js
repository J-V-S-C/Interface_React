import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    body{
        background: rgb(30, 30, 30);
        color: rgb(240, 240, 240);
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        line-height: 1.6;

        
    }

    button {
        font-family: inherit;

        &:hover{
            cursor: pointer;
        }
    }
  




`;
