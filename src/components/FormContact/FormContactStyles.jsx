import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const Title = styled.h2`
    color: #3c1b66;
    font-weight: normal;
    font-size: 35px;
    font-family: Arial;
    text-transform: uppercase;
  `;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
	margin: 20px;
	border: calc(8px + 0.2vw) solid transparent;
	background-origin: border-box;
	background-clip: content-box, border-box;
	background-size: cover;
	box-sizing: border-box;
	box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
    border-radius: 10%;
	background-image: var(--img-url), linear-gradient(to bottom left, #f83600, #f9d423);
    `;

export const Input = styled.input`
    background: 0;
    border: 0;
    outline: none;
    width: 80vw;
    max-width: 400px;
    font-size: 1.5em;
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

export const TextArea = styled.textarea``;


export const Button = styled.button``;

