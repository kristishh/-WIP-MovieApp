import { StyledInput, StyledLabel } from '../layoutContainers'
import { FormFieldProps } from '../../../../globals/interfaces'

const TitleWrapper = (props: FormFieldProps) => {
  const { register, errorMessage } = props
  
  return (
    <StyledLabel htmlFor="title" >
      Title:
      <StyledInput
        id='title'
        shouldWarn={Boolean(errorMessage)}
        {...register('title', { required: 'Title is required.' })}
        placeholder={errorMessage}
        type="text" />
    </StyledLabel>
  )
}

export default TitleWrapper
