import { StyledHeading, Wrapper } from './layoutContainer'

type FieldStringsType = {
  label: string
  value: string
}

const FIELD_STRINGS: FieldStringsType[] = [
  { label: 'Recently added', value: 'id' },
  { label: 'Release date', value: 'release_date' },
  { label: 'Title', value: 'title' },
]

type FieldsType = {
  activeField: string
  getPaginatedMovies: (selectedPage: number, field: string, order: string) => Promise<void>
}


const Fields = ({ activeField, getPaginatedMovies }: FieldsType) => {
  return (
    <Wrapper>
      {FIELD_STRINGS.map((field, index) => {
        return <StyledHeading
          key={index}
          isActive={activeField === field.value}
          isItemFirst={index === 0}
          onClick={() => getPaginatedMovies(1, field.value, 'desc')}>
          {field.label}
        </StyledHeading>
      })}
    </Wrapper>
  )
}

export default Fields
