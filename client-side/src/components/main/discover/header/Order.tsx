import { StyledHeading, Wrapper } from './layoutContainer'

type OrderType = {
  activeOrder: string
  getPaginatedMovies: (selectedPage: number, field: string, order: string) => Promise<void>
}

type OrderStringType = {
  label: string
  value: string
}

const ORDER_STRINGS: OrderStringType[] = [
  {
    label: 'Descening',
    value: 'desc',
  },
  {
    label: 'Ascending',
    value: 'asc',
  }
]

const Order = ({ activeOrder, getPaginatedMovies }: OrderType) => {
  return (
    <Wrapper>
      {ORDER_STRINGS.map((order, index) => {
       return (
       <StyledHeading
          key={index}
          isItemFirst={index === 0}
          isActive={activeOrder === order.value}
          onClick={() => getPaginatedMovies(1, 'id', order.value)}>
          {order.label}
        </StyledHeading>
       )
      })}
    </Wrapper>
  )
}

export default Order
