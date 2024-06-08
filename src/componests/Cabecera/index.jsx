import styled from "styled-components"
import CampoTexto from "../CampoTexto"


const HeaderEstilizado = styled.header`
padding: 60px 0;
display: flex;
justify-content: center;
img {
    width: 150px;
}

`


const Cabecera = () =>  {
    return <HeaderEstilizado>
        <img src="/img/logo.png" alt="logo"/>
        <CampoTexto/>
        
    </HeaderEstilizado>
}

export default Cabecera