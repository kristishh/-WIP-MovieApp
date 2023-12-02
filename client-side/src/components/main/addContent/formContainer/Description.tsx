import { StyledDescriptionLabel, StyledTextArea } from '../layoutContainers'
import { FormFieldProps } from '../../../../globals/interfaces'

const DescriptionWrapper = (props: FormFieldProps) => {
  const { register } = props

  return (
    <StyledDescriptionLabel htmlFor="description">
      Description:
      <StyledTextArea
        {...register('description')}
        name="description" 
        id="description"
        cols={45}
        rows={5}
        placeholder="Add description..." />
    </StyledDescriptionLabel>
  )
}

export default DescriptionWrapper
