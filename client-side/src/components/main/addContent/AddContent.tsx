import ContentForm from './formContainer/Form'
import styled from 'styled-components'

const AddContent = () => {

  return <AddContentWrapper>
    <ContentForm />
  </AddContentWrapper>
}

const AddContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
`
export default AddContent
