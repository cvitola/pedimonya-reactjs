import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items:center;
    padding: 10px 0 10px 0; /*arriba y abajo*/
    margin: 10px 0 10px 0;
    `;
export const Container = styled.div`
     width: 330px;
     /*height: 430px;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 20px;
    padding: 20px;
    text-align: center;
    transition: all 0.25s;
    background-color: #9785ff;
    background-image: linear-gradient(180deg, #9785ff 0%, #7dffde 50%, #ffffff 100%);


    &:hover{
        transform: translateY(-10px);
        box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }

    & img {
        width: 75px;
        height: 75px;
    }
    `;

export const H2 = styled.h2`
    font-weight: 900;
    font-size: 26px;
    `;

export const Details = styled.div`
    border-left: solid 2px;
    margin: 5px;
    padding: 5px;
    
    & p{
        padding: 5px;
        margin: 5px;
        font-size: 20px;
        font-weight: 300;
        text-align: justify;
    }
    
    `;