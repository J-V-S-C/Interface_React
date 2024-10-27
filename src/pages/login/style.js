import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const DivMain = styled.main`
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 3rem;
  background-color: rgb(40, 40, 40);
  padding: 2.5rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.75rem;
  box-shadow: 0rem 0.2rem 0.8rem rgb(0, 0, 0);
  gap: 2rem;

  h1 {
    color: rgb(240, 240, 240);
    margin-top: -1rem;
    margin-bottom: 0.2rem;
    text-shadow: 0.1rem 0.1rem 0.2rem rgb(0, 0, 0);
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(102, 255, 0);
  gap: 2rem;
  
  .Hr {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
  }
`;

export const DivMenu = styled.menu`    
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  background: rgb(10, 22, 30);
  border-radius: 0.5em;
  text-align: center;
  padding: 1em 0;
  gap: 1.5rem;
`;

export const InputEdited = styled.input`
  background-color: rgb(60, 60, 60);
  color: rgb(255, 255, 255);
  width: 100%;
  max-width: 25rem;
  height: 2rem;
  border: 1px solid rgb(85, 85, 85);
  border-radius: 0.3rem;
  transition: border-color 1.2s;

  &:focus {
    border-color: rgb(90, 210, 250);
  }
`;

const animateLine = keyframes`
  0% {
    stroke-dashoffset: 480;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

export const ButtonEdited = styled.button`
  position: relative;
  background-color: transparent;
  color: rgb(255, 255, 255);
  width: 100%;
  max-width: 25rem;
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
    stroke-dasharray: 0 480;
    transition: stroke-dashoffset 1s ease-in-out;
  }

  &:hover .line {
    stroke-dasharray: 150 480;
    animation: ${animateLine} 2s ease-in-out forwards;
  }
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 1.5rem;
`;

export const LinkEdited = styled(Link)`
  color: rgb(102, 255, 0);
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonForm = styled.button`
  background-color: rgb(102, 255, 0);
  color: rgb(10, 10, 10);
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(80, 200, 0);
  }
`;

export const Accounts = styled.div`
  background-color: gray;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 1rem;
`;
