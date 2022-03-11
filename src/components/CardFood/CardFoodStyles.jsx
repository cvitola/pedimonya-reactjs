import styled from 'styled-components';
import jamonYMorron from '../../img/jamonymorron.jpg';

export const Card = styled.div`
  display: grid;
  grid-template-columns: 300px;
  width: 300px;
  grid-template-rows: 210px 210px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #dad3bc;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  font-family: roboto;
  text-align: center;

  `;

export const Visual = styled.div`
    grid-area: image;
    background: url(${jamonYMorron});
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
    `;

export const Details = styled.div`
    grid-area: text;
    margin: 25px;
    position: relative;
    h2{
        color: #807070;
        font-size: 15px;
        padding: 5px;
    }

    h3{
        border: solid red;
        width: 30%;
        height: 30%;
        border-radius: 50%;
        background: red;
        color: white;
        position: absolute;
        margin-top: -120px;
        margin-left: 200px;
        padding: 5px;
    }
    `;

export const Count = styled.div`
    grid-area: stats; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    input{
        border: none;
        width: 50px;
        height: 20px;
        margin: 10px 10px;
        text-align: center;
        
    }
    `;

export const Control = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `;

export const Btn = styled.button`
    border: none;
    border-radius: 50%;
    background: white;
    width: 20px;
    height: 20px;
    box-shadow: 1px 1px 1px grey;
    :hover{
        background: black;
        color: white;
    }`;
    
export const AddButton = styled.button`
    border: none;
    background: green;
    border-radius: 5px;
    color: white;
    width: 100px;
    height: 40px;
    padding: 10px;
    `;

