import { FaCompass, FaSquarePlus } from 'react-icons/fa6'
import { navigationI, paragraphI } from '../../globals/interfaces'
import { Wrapper } from './layoutContainer'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const Vertical = ({ navigate, screenSize }: navigationI) => {
  const location = useLocation()

  return (
    <Wrapper screenSize={screenSize}>
      <Heading>Main</Heading>
      <ItemWrapper
        onClick={() => navigate('/discover')}
        isActive={location.pathname === '/discover'}
        screenSize={screenSize}>
        <FaCompass size={22} />
        <StyledParagrpah>Discover</StyledParagrpah>
      </ItemWrapper>
      <ItemWrapper
        onClick={() => navigate('/add-content')}
        isActive={location.pathname === '/add-content'}
        screenSize={screenSize}>
        <FaSquarePlus size={22} />
        <StyledParagrpah>Add Content</StyledParagrpah>
      </ItemWrapper>
    </Wrapper>
  )
}

const Heading = styled.h5`
  color: #4e798e;
  font-weight: 500;
  padding-left: 30px;
`

const ItemWrapper = styled.div<paragraphI>`
  display: flex;
  align-items: center;
  padding-left: 50px;
  cursor: pointer;

  ${({ isActive }) => isActive && `
  color: #4e798e;
    padding-left: 47px;
    border-left: 3px solid #4e798e;
  `}
`

const StyledParagrpah = styled.p`
  padding-left: 5px;
  margin: 15px 0px; 
`
export default Vertical
