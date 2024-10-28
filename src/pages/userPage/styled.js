import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled, { keyframes } from "styled-components";



const animateLine = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 332;
  }
`;



export const DivMain = styled.main`
  display: flex;
  justify-content: space-around;
  width: 76em;
  height: auto;
  margin: 0 auto;
  margin-top: 4em;
  background-color: rgb(40, 40, 40);
  border: none;
  border-radius: 0.5em;
  flex-direction: row;
  padding-bottom: 2em;
  


`




export const Nav = styled.nav`
  
  display: flex;
  flex-direction: column;
  margin-left: 1px;
  gap: 40px;

  
  .Hr{
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    width: 12em;
  }

  a{
    text-decoration: none;
    color: yellow;
  }

`



export const DivMenu = styled.menu`    

  display: flex;
  flex-direction: column;
  width: 47em;
  height: auto;
  background: rgb(30, 30, 30);
  margin-top: 2em;
  border-radius: 0.5em;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;

  hr{
    width: 40em;
  }


`

export const ButtonEdited = styled.button`
  position: relative;
  background-color: transparent;
  color: rgb(255, 255, 255);
  width: 25rem;
  height: 2.5rem;
  margin-top: 2em;
  margin-left: 13em;
  margin-bottom: 0.2em;
  border: 1px solid rgb(85, 85, 85);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
  align-items: center;
  

  &:hover {
    background-color: rgb(30, 30, 30);
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 3;  
      
    }

  .arrow{
    margin-left: 10.5em;

  }

  .line {
    stroke: rgb(120, 120, 120);
    stroke-dasharray: 0 480;
    transition: stroke-dashoffset 1s ease-in-out;
  }

  &:hover .line {
    stroke-dasharray: 150 480;
    animation: ${animateLine} 2s ease-in-out forwards;
  }
`;






export const InputEdited = styled.input`




  background-color: rgb(60, 60, 60);
  color: rgb(255, 255, 255);
  width: 20rem;
  height: 2rem;
  border: 1px solid rgb(85, 85, 85);
  border-radius: 0.3rem;
  transition: border-color 1.2s;
  margin-left : 8em;


  &:focus {
    border-color: rgb(90, 210, 250);
  }
`;




export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 300px;
`

export const LinkEdited = styled(Link)`



  color: rgb(102, 255, 0);
  .arrowEdit{
      margin-top: 35px;
        color: white;
    }

    &:hover{
        opacity: 0.7;
    }

`


export const ButtonForm = styled.button`
  
  
  background-color: rgb(102, 255, 0);
  color: rgb(10, 10, 10);
  border: 1px solid rgb(85, 85, 85); 
  border-radius: 0.3rem;
  width: 6rem;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  margin-top: 1em; 
  margin-left: 0.2em;

  &:hover {
    background-color: rgb(80, 200, 0); 
    color: rgb(255, 255, 255); 
    border-color: rgb(102, 255, 0); 
  }
`

export const Accounts = styled.div`

  background-color: gray;
  width: 20%;
  display: flex;
  flex-direction: column;
  margin-left: 20em;

`
