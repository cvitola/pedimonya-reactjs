import styled from 'styled-components';

export const ContainerBar = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #ec8b8d;
    background-image: linear-gradient(180deg, #ec8b8d 0%, #e295b1 100%);
    border-radius: 15px;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    border-radius: 15px;
    width: 90%;


    & input {
        padding: 5px;
        margin-left: 10px;
        border: none;
        border-radius: 5px;
        height: 40px;
        width: 90%;
    }

    & Button {
        width: 30%;
    }
    
    `;

export const Results = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 5px;

    `;

export const ContainerSearch = styled.div`
    display: flex;
    width: 90% ;
    align-items:center;
    font-size: 28px;

    `;

