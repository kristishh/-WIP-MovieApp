import styled from 'styled-components'

type ParagraphType = {
  isActive: boolean
  isItemFirst: boolean
}

export const StyledHeading = styled.h3<ParagraphType>`
  display: inline;
  color: #ACAEAA;
  font-weight: 400;
  padding: 0 10px;
  cursor: pointer;

  ${({ isItemFirst }) => !isItemFirst && `
    border-left: 2px solid #ACAEAA;
  `}


  ${({ isActive }) => isActive && `
    color: #4e798e;
    font-weight: 600;
    cursor: default;
  `}
`

export const Wrapper = styled.div`
  margin: 20px 0;
`
