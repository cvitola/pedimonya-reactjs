import styled from 'styled-components';

export const ContainerCount = styled.div`
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
        
}`;

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