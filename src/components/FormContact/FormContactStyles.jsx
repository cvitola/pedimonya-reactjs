import styled from 'styled-components';

export const Form = styled.form`
    padding: 15px;
    margin: 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid grey;
    `;

export const Input = styled.input`
    padding: 15px;
    margin: 15px;
    border-radius: 10px;
    border: 0;
    width: 80vw;
    max-width: 400px;

    transition: padding 0.3s 0.2s ease;

    &:focus {
        padding-bottom: 5px;
    }

    // sibling magic ;o
    &:focus + .line {
        &:after {
        transform: scaleX(1);
        }
    }
    `;

export const ImgContact = styled.img`
    width: 30%;
    padding:10px;
    margin:10px;
    border-radius: 15px;
    @media screen and (max-width: 768px){
        width:100%;
    }
    `;
export const TextArea = styled.textarea`
    padding: 15px;
    margin: 15px;
    border-radius: 10px;
    border: 0;
    width: 80vw;
    max-width: 400px;
    height: 100px;
    `;


export const Button = styled.button``;

