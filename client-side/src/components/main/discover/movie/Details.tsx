import { FaCalendarDays, FaListUl, FaUserPen } from 'react-icons/fa6'
import { MovieType, modalPosition } from '../../../../globals/interfaces'
import { MutableRefObject, useEffect, useRef } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import useScreenSize from '../../../../hooks/useScreenSize'

export type MovieDetailsProps = {
  modalPosition: modalPosition
  movie: MovieType | undefined
  closeModal?: () => void
  showDetails: MutableRefObject<boolean>
}

const MovieDetails = ({ modalPosition, movie, closeModal }: MovieDetailsProps) => {
  const ref = useRef(null)
  const { arrowPosition, top, left } = modalPosition
  const screenSize = useScreenSize()

  // const handleOutsideClick = () => {
  //   modalPosition.hideModal = true
  // }
  
  // document.addEventListener('click', hideModal)
  // document.addEventListener('resize', hideModal)
  const handleClickOutside = async (event: any) => {
    
    if (ref.current && !(ref.current as any).contains(event.target)) {
      console.log('outside')
      await closeModal
      document.removeEventListener('click', handleClickOutside)
    }
  }
  

  const Triangle = () => {
    if (screenSize === 'mobile' || screenSize === 'tablet') {
      return null
    }

    if (arrowPosition === 'left') {
      return <LeftTriangle />
    } else {
      return <RightTriangle />
    }
  }
  
  useEffect(() => {
      document.addEventListener('click', handleClickOutside)
  }, [ref])


  return (
    <Modal ref={ref} 
    id='movieDetailsModal' 
    top={top} left={left} arrowPosition={arrowPosition} screenSize={screenSize}>
      <Wrapper screenSize={screenSize}>
        <Triangle />
        <Title screenSize={screenSize}>{movie?.title}</Title>
        <Director>
          <p><FaUserPen size={25} /> {screenSize === 'bigScreen' && 'Director: '}</p>
          {`${movie?.first_name} ${movie?.last_name}`}
        </Director>
        <Date>
          <p><FaCalendarDays size={25} /> {screenSize === 'bigScreen' && 'Release date: '}</p>
          {moment(movie?.release_date).format('DD/MM/YYYY')}
        </Date>
        <Genres>
          <p><FaListUl size={25} /> {screenSize === 'bigScreen' && 'Genres: '}</p>
          {movie?.genres.join(', ')}
          </Genres>
        <Description screenSize={screenSize}>{movie?.description}</Description>
      </Wrapper>
    </Modal>
  )
}

type DescriptionType = {
  screenSize: string;
}

const Description = styled.p<DescriptionType>`
  padding-top: 3px;
  line-height: 1.3;
  ${({ screenSize }) => (screenSize === 'bigScreen' || screenSize === 'smallScreen') && `
    max-height: 210px;
  `}
`

const Genres = styled.p`
  color: #ECEEF0;
  padding: 3px 0;
  display: flex;
  align-items: end;

  > p {
    margin: 0;
    color: #4e798e;
    padding-right: 5px;
  }
`

type TitleType = {
  screenSize: string
}

const Title = styled.h2<TitleType>`
  ${({ screenSize }) => (screenSize === 'bigScreen' || screenSize !== 'smallScreen') && `
    max-height: 60px;
  `}
`

const Date = styled.p`
  display: flex;
  align-items: end;

  > p {
    margin: 0;
    color: #4e798e;
    font-weight: 500;
    padding-right: 5px;
  }
`

const Director = Date

type WrapperType = {
  screenSize: string
}

const Wrapper = styled.div<WrapperType>`
  padding: 30px;

  > * {
    margin: 2px;
    overflow: hidden;
  }

  ${({ screenSize }) => screenSize !== 'bigScreen' && screenSize !== 'smallScreen' && `
    padding: 10px;
  `}
`

const Modal = styled.div<modalPosition>`
  position: absolute;
  color: white;
  background-color: #11171C;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  opacity: 90%;
  border-radius: 10px;

  ${({ screenSize }) => screenSize === 'bigScreen' || screenSize === 'smallScreen' ? `
    min-height: 150px;
    max-height: 380px;
    width: 470px;
  ` : `
    overflow: auto;
    width: 220px;
    height: 357px;
  `}

  &::-webkit-scrollbar {
    display: none;
    background-color: #11171C;
  }
`

const BaseTriangle = styled.div`
  position: absolute;
  z-index: -1;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`

const LeftTriangle = styled(BaseTriangle)`
  left: -10px;
  border-right: 10px solid #11171C;
`

const RightTriangle = styled(BaseTriangle)`
  right: -10px;
  border-left: 10px solid #11171C;
`

export default MovieDetails

