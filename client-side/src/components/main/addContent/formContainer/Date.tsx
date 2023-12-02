import { DateInput, StyledLabel } from '../layoutContainers'
import { useEffect, useState } from 'react'
import { FormFieldProps } from '../../../../globals/interfaces'

const ReleaseDateWrapper = (props: FormFieldProps) => {
  const { register, errorMessage } = props
  const [inputType, setInputType] = useState('date')

  useEffect(() => {
    if (errorMessage) {
      setInputType('text')
      errorMessage
    }
  }, [errorMessage])

  return (
    <StyledLabel htmlFor="releaseDate" >
      Release Date:
      <DateInput
        id="releaseDate"
        {...register('releaseDate', { required: 'Invalid date' })}
        onFocus={() => setInputType('date')}
        placeholder={errorMessage}
        shouldWarn={Boolean(errorMessage)}
        type={inputType} />

    </StyledLabel>
  )
}

export default ReleaseDateWrapper
