import styled from "styled-components";

export const MainPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    `;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    margin: 10px;
    margin: auto;
    width: ${ props => props.ancho || "100%"};
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const WrapperColor = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin: 10px;
    width: 100%;
    margin: auto;
    background: #536976;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #292E49, #536976);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #292E49, #536976); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`;

export const ImageTitle = styled.img`
    padding: 10px;
    margin: 10px;
    width: 50%;
    `;

export const Description = styled.p`
    padding: 10px;
    margin: 10px;
    font-size: 1em;
    `;

export const ImageMain = styled.img`
    width: ${props => props.dimension || "35%"};
    padding: 10px;
    margin: 10px;
    
    @media screen and (max-width: 768px){
        width: ${props => props.dimension ? "10%" : "35%"};
    }
    `;

export const TipoPokemon = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    margin: 10px;
    margin: auto;
    `;

export const ButtonSuccess = styled.button`
  background: #FF4742;
  border: 1px solid #FF4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  &:hover{
    background-color: initial;
    background-position: 0 0;
    color: #FF4742;
  }
  &:active{
    opacity: .5;
  }`;

export const ButtonInfo = styled.button``;