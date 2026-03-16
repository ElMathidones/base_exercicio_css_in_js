import styled from 'styled-components'

const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Titulo = styled.h1`
  font-size: 32px;
`

const Cabecalho = () => (
  <Header>
    <Titulo>EBAC Jobs</Titulo>
  </Header>
)

export default Cabecalho
