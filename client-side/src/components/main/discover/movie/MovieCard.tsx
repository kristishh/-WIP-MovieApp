import { FaCalendarDays, FaListUl } from 'react-icons/fa6'
import { MovieCardProps } from '../../../../globals/interfaces'

import moment from 'moment'
import styled from 'styled-components'

const MovieCard = ({ movie, handleShowDetails }: MovieCardProps) => {
  const { id, profile_image, title, genres, release_date } = movie
  
  return (
    <>
      <Card
        id={id}
        onClick={handleShowDetails}
      >
        <HoverWrapper className='hoverDetails'>
          <div>
            <p>click to see more about</p>
            <h2>{title}</h2>
          </div>
        </HoverWrapper>
        <div className='posterWrapper'>
          <Poster src={profile_image as unknown as string} alt={title} draggable={false} />
          <Details>
            <Title>{title}</Title>
            <Genres><FaListUl size={16} /> {genres.join(', ')}</Genres>
            <Genres><FaCalendarDays size={16} /> {moment(release_date).format('L')}</Genres>
          </Details>
        </div>
      </Card>
    </>
  )
}

const HoverWrapper = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: inherit;
  height: inherit;
  background-color: #ECEEF0;
  overflow: hidden;
  word-break: break-word;
  text-align: center;

  p, h2 {
    display: flex;
    justify-content: center;
    margin: 0;
  }
`

const Poster = styled.img`
  border-radius: 10px 10px 0 0;
  display: block;
  height: 250px;
  width: 200px;
  object-fit: fill;
`

const Details = styled.div`
  padding: 0px 5px 5px 0px;
  color: #2c3345;
`

const Title = styled.h3`
  margin: 0;
  padding: 10px 0 5px 0;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 195px;
`

const Genres = styled.p`
  display: flex;
  align-items: flex-start;
  margin: 0px 0px 5px 0px;
  font-weight: 500;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 195px;

  svg {
    color: #4e798e;
    margin-right: 5px;
  }
`

const Card = styled.div`
  border-radius: 10px;
  padding: 10px;
  background-color: #ECEEF0;
  width: 200px;
  height: 337px;

  &:hover {
    .posterWrapper {
      opacity: 0.2;
    }
    
    .hoverDetails {
      display: flex;
    }
  }
`

export default MovieCard
