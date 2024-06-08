import styled from "styled-components"

 
const ItemListaEstilizado = styled.li`
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${props => props.$activo ? "#7b78e5" : "#d9d9d9"};
    font-family: ${props => props.$activo ? "GandhiSansRegular" : "#GandhiSansBold"};

`   
const ItemNavegacion = ({children,iconoActivo,iconoInactivo, activo=false}) => {
    return<ItemListaEstilizado $activo={activo}>
    <img src={activo ?  iconoActivo : iconoInactivo} alt="Icono_item" />
        {children}
    </ItemListaEstilizado>
}

export default ItemNavegacion