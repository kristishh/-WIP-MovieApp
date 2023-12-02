import { StyledInput, StyledLabel } from '../layoutContainers'
import { FormFieldProps } from '../../../../globals/interfaces'

const DirectorNames = (props: FormFieldProps) => {
  const { register, errorMessages } = props

  return (
    <>
      <StyledLabel id="director">Directed By:</StyledLabel>
      <label htmlFor="firstName">
        <StyledInput
          {...register('names.firstName', { required: 'Director\'s first name is required.' })}
          shouldWarn={Boolean(errorMessages?.firstName)}
          placeholder={errorMessages?.firstName?.message as string}
          type="text"
          id="firstName" />
        First Name
      </label>
      <label htmlFor="lastName">
        <StyledInput
          {...register('names.lastName', { required: 'Director\'s last name is required.' })}
          shouldWarn={Boolean(errorMessages?.lastName)}
          placeholder={errorMessages?.lastName?.message as string}
          type="text"
          id="lastName" />
        Last Name
      </label>
    </>
  )
}

export default DirectorNames
