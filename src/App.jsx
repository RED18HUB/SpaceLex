import styled from "styled-components"
import GlobalStyles from "./componests/GlobarStyles/index"
import Cabecera from "./componests/Cabecera"
import CampoTexto from "./componests/CampoTexto"
import BarraLateral from "./componests/BarraLateral/BarraLateral"
import Banner from "./componests/Banner/Banner"
import banner from "./assets/banner.png"
import Galeria from "./componests/Galeria/Galeria"
import fotos from "./fotos.json"
import { useEffect, useState } from "react"
import ModalZoom from "./componests/ModalZoom"
import Pie from "./componests/Pie"


const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width:100%;
min-height:100vh;
`
const AppContainer = styled.div`
  width:1280px;
  max-width:100%;
margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap:24px;
`
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)
  }, [filtro, tag])

  const alAlternarFavorito = (foto) => {
    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      })
    }
    setFotosDeGaleria(fotosDeGaleria.map(fotosDeGaleria => {
      return {
        ...fotosDeGaleria,
        favorita: fotosDeGaleria.id === foto.id ? !foto.favorita : fotosDeGaleria.favorita
      }
    }))
  }

 return (
    <FondoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Cabecera
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <MainContainer>
          <BarraLateral />
          <ContenidoGaleria>
            <Banner
              backgroundImage={banner}
              texto='La galería más completa de fotos del espacio.'
            />
            <Galeria
              fotos={fotosDeGaleria}
              fotoSelecionada={foto => setFotoSeleccionada(foto)}
              alAlternarFavorito={alAlternarFavorito}
              setTag={setTag}
            />
          </ContenidoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSeleccionada}
        close={() => setFotoSeleccionada(null)}
        alAlternarFavorito={alAlternarFavorito}
      />
      <Pie />
    </FondoGradiente>
  )
}
export default App