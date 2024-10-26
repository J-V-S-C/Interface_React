import styled from "styled-components";

export const DivMain = styled.main`

    width: 80%;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 3rem;
    background-color: rgb(40, 40, 40);
    padding: 2.5rem;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.75rem;
    box-shadow: 0rem 0.2rem 0.8rem rgb(0, 0, 0);
    gap: 2rem;
    

    h1{
        color: rgb(240, 240, 240); 
        margin-top: -1rem;
        margin-bottom: 0.2rem;
        text-shadow: 0.1rem 0.1rem 0.2rem rgb(0, 0, 0); 
        
    }
    
`



export const InputEdited = styled.input`

    background-color: rgb(60, 60, 60);
    color: rgb(255, 255, 255);
    width: 25rem;
    height: 2rem;
    border: 1px solid rgb(85, 85, 85);
    border-radius : 0.3rem ;
    transition: border-color 1.6s;

    &:focus{
        border-color: rgb(90, 210, 250);
    }
`

export const ButtonEdited = styled.button`

    position: relative;
    background-color: transparent;
    color: rgb(255, 255, 255);
    width: 25rem;
    height: 2.5rem;
    border: 1px solid rgb(85, 85, 85);
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s;
    

    &:hover {
        background-color: rgb(30, 30, 30);
    }

    svg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        fill: none;
        stroke-width: 3;
    }

       .line {
        stroke: rgb(120, 120, 120);
        stroke-dasharray: 150 480;
        stroke-dashoffset: 480; 
        transition: stroke-dashoffset 1s ease-in-out;
    }


    &:hover .line {
        stroke-dashoffset: 0; 
    }

    


    

`

