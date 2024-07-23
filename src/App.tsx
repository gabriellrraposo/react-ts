import './App.css'

// Define o tipo de Título
type TitleProps = {
  text : string
  size? : "small" | "large"
}

//Define o tipo de Texto
type TextoProps = {
  children : React.ReactNode
}

// Componente Título usando o tipo Título e tamanho grande
const Title = (titulo : TitleProps) => {
  return <h1 
    style={{ fontSize: titulo.size === "small" ? "3rem" : "5rem"}}
  >{titulo.text}</h1>
}

// Componente Título usando o tipo Título e tamanho pequeno
const TitlePequeno = (titulo : TitleProps) => {
  return <h1 
    style={{fontSize: titulo.size === "small" ? "3rem" : "5rem"}}
  >{titulo.text}</h1>
}

// Componente Título usando a desestruturação do tipo Título e tamanho padrão como small
const TitleDefault = ({text, size = "small"} : TitleProps) => {
  return <h1
    style={{fontSize: size === "small" ? "3rem" : "5rem"}}
    >{text}
  </h1>
}

// Componente usando o desestruturação para definir o tipo
const Subtitulo = ({ text } : { text : string }) => {
  return <h2>{text}</h2>
}

const Paragrafo = ({ children } : { children : string}) => {
  return <p>{children}</p>
}

// Componente usando o desestruturação para definir o tipo
// Children é uma palavra reservada e representa o elemento filho deste componente
// React.ReactNode é o tipo para html
const Texto = ({ children } : { children : React.ReactNode }) => {
  return <div>{ children }</div>
}

const OutroTexto = ({ children } : TextoProps) => {
  return <div>{ children }</div>
}

// Chama os componentes que foram criados
function App() {
  return (
    <div className='App'>
      <Title text='Este é o título' size='large'></Title>
      <TitlePequeno text='Este é o título pequeno' size='small'></TitlePequeno>
      <TitleDefault text='Small é o tamanho padrão para o título'></TitleDefault>
      <Subtitulo text="Este é o subtitulo"></Subtitulo>
      <Paragrafo>Este é um parágrafo</Paragrafo>
      <Texto>
        <span>
          Este é um <b>ReactNode</b>
        </span>
      </Texto>
      <OutroTexto>
        <span>
          Este é um outro <b>ReactNode</b>
        </span>
      </OutroTexto>
    </div>
  )
}

export default App
