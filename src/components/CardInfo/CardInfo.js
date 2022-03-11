import { Conteiner } from "./CardInfoStyles";

const CardInfo = ({dato}) => {
  return (
    <Conteiner>
        <h3>{dato.title}</h3>
        <h4>{dato.icon}</h4>
        <p>{dato.description}</p>
    </Conteiner>
  )
}

export default CardInfo;