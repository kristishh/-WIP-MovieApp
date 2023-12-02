import Fields from './Fields'
import Order from './Order'
import styled from 'styled-components'

type HeaderProps = {
  activeField: string
  activeOrder: string
  getPaginatedMovies: (selectedPage: number, field: string, order: string) => Promise<void>
}

const Header = ({ activeField, activeOrder, getPaginatedMovies }:HeaderProps) => {
  return (
    <>
      <StyledHeading>Discover</StyledHeading>
      <Fields activeField={activeField} getPaginatedMovies={getPaginatedMovies}/>
      <Order activeOrder={activeOrder} getPaginatedMovies={getPaginatedMovies}/>
    </>
  )
}

const StyledHeading = styled.h1`
  letter-spacing: 2px;
`

export default Header
