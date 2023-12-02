import { FaCompass, FaSquarePlus } from 'react-icons/fa6'
import { navigationI, paragraphI } from '../../globals/interfaces'
import { Wrapper } from './layoutContainer'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'


const Horizontal = ({ navigate, screenSize }: navigationI) => {
  const location = useLocation()

  return (
    <Wrapper screenSize={screenSize}>
      <ItemWrapper onClick={() => navigate('/discover')}
        isActive={location.pathname === '/discover'}
        screenSize={screenSize}>
        <FaCompass size={22} />
        <StyledParagrpah
        >
          Discover
        </StyledParagrpah>
      </ItemWrapper>
      <ItemWrapper
        onClick={() => navigate('/add-content')}
        isActive={location.pathname === '/add-content'}
        screenSize={screenSize}>
        <FaSquarePlus size={22} />
        <StyledParagrpah
        >
          Add Content
        </StyledParagrpah>
      </ItemWrapper>
    </Wrapper>
  )
}

const ItemWrapper = styled.div<paragraphI>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 20px 9px 20px;
  cursor: pointer;

  ${({ isActive }) => isActive && `
    color: #4e798e;
    padding-bottom: 5px;
    border-bottom: 4px solid #4e798e;
  `}
`

const StyledParagrpah = styled.p`
  margin: 0;
`

export default Horizontal
