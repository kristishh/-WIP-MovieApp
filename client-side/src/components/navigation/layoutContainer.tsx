import styled from 'styled-components'
import { wrapperI } from '../../globals/interfaces'

export const Wrapper = styled.div<wrapperI>`
  min-width: 250px;
  height: auto;
  min-height: 100vh;
  background-color: #11171C;
  color: #D7DFE6;
  font-size: 22px;
  box-sizing: border-box;

  ${({ screenSize }) => screenSize !== 'bigScreen' && `
    display: flex;
    align-items: center;
    height: 65px;
    min-height: unset;
  `}

  ${({ screenSize }) => screenSize === 'mobile' && `
    justify-content: center;
  `}
`
