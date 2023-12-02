import { StyledInput as InputInterface, wrapperI } from '../../../globals/interfaces'
import styled from 'styled-components'

export const SubmitButton = styled.button`
  font-size: 20px;
  border-radius: 10px;
  padding: 5px 10px;
  margin-left: 20px;
  font-family: 'Inter', sans-serif;
  color: white;
  background-color: #18BD5B;
  border: none;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: 0px 0px 15px -4px rgba(70,77,95,1);
    -moz-box-shadow: 0px 0px 15px -4px rgba(70,77,95,1);
    box-shadow: 0px 0px 15px -4px rgba(70,77,95,1);
  }
`

export const StyledInput = styled.input<InputInterface>`
  display: block;
  margin-top: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #464d5f;
  border-radius: 5px;
  border: 1px solid #C3CAD8;
  color-scheme: #C3CAD8;

  &:focus {
    border-color: #0293E2;
    outline: 1px solid #0293E2;

    ${({ shouldWarn }) => shouldWarn && `
      border-color: #D61355;
      outline: 1px solid #D61355;
    `}
  }

  ${({ shouldWarn }) => shouldWarn && `
    border: 1px solid #D61355;

    &::placeholder {
      color: #D61355;
      font-style: italic; 
    }
  `}
`

export const DateInput = styled(StyledInput)`
  width: 200px;
`

export const StyledLabel = styled.label`
  font-weight: 600;
`

export const StyledDescriptionLabel = styled(StyledLabel)`
  display: grid;
  padding: 20px 20px 30px 20px;
  justify-content: flex-start;
`

export const StyledTextArea = styled.textarea`
  margin-top: 10px;
  resize: none;
  padding: 10px 20px;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #464d5f;
  border-radius: 5px;
  border: 1px solid #C3CAD8;
  color-scheme: #C3CAD8;

  &:focus {
    border-color: #0293E2;
    outline: 1px solid #0293E2;
  }
`

export const StyledForm = styled.form<wrapperI>`
  font-size: 20px;
  color: #2c3345;

  .titleAndDate {
    display: flex;

    ${({ screenSize }) => screenSize !== 'bigScreen' && screenSize !== 'smallScreen' && `
      flex-direction: column;
    `}
  }

  .titleAndDate > label {
    padding: 20px;
    width: auto;

    ${({ screenSize }) => screenSize !== 'bigScreen' && screenSize !== 'smallScreen' && `
      padding-bottom: 10px;
    `}
  }

  .releaseDate > label {
    ${({ screenSize }) => screenSize !== 'bigScreen' && screenSize !== 'smallScreen' && `
      padding-top: 10px;
      padding-bottom: 10px;
    `}
  }

  .directorNames {
    display: grid;
    column-gap: 10px;
    width: fit-content;
    padding: 20px 20px 10px 20px;

    
    #director {
      grid-column: 1;
      grid-row: 1;
    }

    label[for='firstName'] {
      grid-column: 1;
      grid-row: 2;
    }

    label[for='lastName'] {
      grid-column: 2;
      grid-row: 2;

      ${({ screenSize }) => screenSize !== 'bigScreen' && screenSize !== 'smallScreen' && `
        grid-column: 1;
        grid-row: 3;
      `}
    }

    label[for='firstName'], label[for='lastName'] {
      color: #464d5f;
      font-weight: 300;
      font-size: 14px;
    }

    input {
      margin-bottom: 10px;
    }
  }

  input {
    padding: 5px;
    max-width: 100%;
  }
`
