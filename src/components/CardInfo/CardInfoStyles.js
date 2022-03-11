import styled from 'styled-components';

export const Conteiner = styled.div`
width: 330px;
/*height: 430px;*/
border-radius: 8px;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
overflow: hidden;
margin: 20px;
text-align: center;
transition: all 0.25s;
background: #FFEFBA;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    &:hover{
        transform: translateY(-10px);
        box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }
    & h3{
        padding: 10px;
        margin: 20px;
        font-weight: 800;
        font-size: 36px;
    }
    & h4{
        padding: 10px;
        margin: 20px;
        font-weight: 600;
        font-size: 28px;
    }


    & p{
        padding: 10px;
        margin: 5px;
        font-size: 20px;
        font-weight: 300;
        text-align: justify;
    }
`;