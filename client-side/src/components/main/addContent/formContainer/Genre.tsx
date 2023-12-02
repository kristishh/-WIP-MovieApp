import { Controller } from 'react-hook-form'
import { GenreI } from '../../../../globals/interfaces'
import Select from 'react-select'
import { StyledLabel } from '../layoutContainers'
import { genreOptions } from './utils'
import styled from 'styled-components'

const Genre = (props: GenreI) => {
  const { control, setValue, register, getValues } = props

  return (
    <Wrapper>
      <StyledLabel>
        Genre:
        <Controller
          control={control}
          name='genres'
          defaultValue={''}
          render={() => (
            <StyledSelect
              {...register('genres', { required: true })}
              id='genres'
              isMulti={true}
              required={true}
              value={getValues('genres')}
              options={genreOptions()}
              onChange={(e) => {
                setValue('genres', e)
              }} />)
          } />
      </StyledLabel>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 300px;
  padding-left: 20px;
  padding-right: 20px;
`

const StyledSelect = styled(Select)`
  margin-top: 10px;
  font-weight: 400;
`

export default Genre
