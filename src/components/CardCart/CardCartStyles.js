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
    background: #CAC531;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #F3F9A7, #CAC531);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #F3F9A7, #CAC531); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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