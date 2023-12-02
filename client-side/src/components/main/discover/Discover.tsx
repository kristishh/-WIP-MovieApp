import PaginatedMovies from './PaginatedMovies'
import styled from 'styled-components'
import useScreenSize from '../../../hooks/useScreenSize'
import { wrapperI } from '../../../globals/interfaces'

const Discover = () => {
  const screenSize = useScreenSize()
  return (
    <DiscoverWrapper screenSize={screenSize}>
      <PaginatedMovies />
    </DiscoverWrapper>
  )
}

const DiscoverWrapper = styled.div<wrapperI>`
  height: auto;
  font-family: 'Inter', sans-serif;
  margin: 20px;
  width: 100vw;
  ${({ screenSize }) => screenSize !== 'bigScreen' && `
    width: auto;
  `}
  `

export default Discover
