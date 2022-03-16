import styled from 'styled-components';


export const Content = styled.div`
    background-color: rgba(255,255,255,0.5);
    backdrop-filter: blur(20px);
    width: 330px;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: all 0.25s;

    &:hover{
        transform: translateY(-15px);
        box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }
    
    & img{
        padding: 10px;
        margin: 10px;
        width: 150px;
        height: 150px;
    }

    & h3{
        padding: 5px;
        margin: 5px;
        font-size: 32px;
        font-weight: 800;
        color: rgb(54, 17, 88);
    }
    
    & h4{
        padding: 5px;
        font-weight: 600;
        font-size: 24px;
    }

    & h6{
        padding: 5px;
        margin: 5px;
        color: red;
    }
    
    & p{
        padding: 5px;
        font-size: 16px;
        font-weight: 300;
    }
    
    `;