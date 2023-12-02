import 'rc-pagination/assets/index.css'
import { MovieType, fetchMoviesI, modalPosition } from '../../../globals/interfaces'
import { useEffect, useRef, useState } from 'react'
import Header from './header/Header'
import MovieCard from './movie/MovieCard'
import MovieDetails from './movie/Details'
import Pagination from 'rc-pagination'
import styled from 'styled-components'
import useMovie from '../../../hooks/useMovie'
import useScreenSize from '../../../hooks/useScreenSize'


const PaginatedMovies = () => {
  const { movies, order, field, current_page, total_count, fetchMovies } = useMovie()
  const [selectedMovie, setSelectedMovie] = useState<MovieType>()
  const [modalPosition, setModalPosition] = useState<modalPosition>({
    top: 0,
    left: 0,
    arrowPosition: ''
  })
  const showDetails = useRef(false)
  const screenSize = useScreenSize('paginatedMovies')

  const getPaginatedMovies = async (selectedPage: number, sortedBy: string | null, orderedBy: string | null) => {
    await fetchMovies({ params: { page: selectedPage, field: sortedBy, order: orderedBy } } as fetchMoviesI)
  }

  const closeModal = () => {
    console.log('--------')

    setModalPosition({ top: 0, left: 0 })
  }

  const handleShowDetails = (e: React.MouseEvent) => {
    setModalPosition({ top: 0, left: 0 })
    const id = e.currentTarget.getAttribute('id')
    const movie = movies?.find(movie => movie.id == id) as MovieType
    setSelectedMovie(movie)

    if (screenSize !== 'bigScreen' && screenSize !== 'smallScreen') {
      setModalPosition({
        top: window.scrollY + e.currentTarget.getBoundingClientRect().top,
        left: e.currentTarget.getBoundingClientRect().left
      })
    } else if (e.currentTarget.getBoundingClientRect().y ===
      e.currentTarget.nextElementSibling?.nextElementSibling?.getBoundingClientRect().y) {
      setModalPosition({
        top: window.scrollY + e.currentTarget.getBoundingClientRect().top,
        left: e.currentTarget.getBoundingClientRect().left + 250,
        arrowPosition: 'left'
      })
    } else {
      setModalPosition({
        top: window.scrollY + e.currentTarget.getBoundingClientRect().top,
        left: e.currentTarget.getBoundingClientRect().left - 500,
        arrowPosition: 'right'
      })
    }
    showDetails.current = true
  }

  useEffect(() => {
    if (!movies) {
      getPaginatedMovies(1, field ? field : 'id', 'desc')
    }
  }, [])

  if (!movies) return <h1>...</h1>
console.log(screenSize)

  return (
    <div id='paginatedMovies'>
      <Header activeField={field ? field : 'id'}
        activeOrder={order ? order : 'desc'}
        getPaginatedMovies={getPaginatedMovies} />
      <Movies>
        {movies?.map((movie, index) => {
          return (<MovieCard key={index} movie={movie} handleShowDetails={handleShowDetails} />)
        })}
      </Movies>
      {showDetails.current &&
        <MovieDetails modalPosition={modalPosition}
          movie={selectedMovie}
          showDetails={showDetails}
          closeModal={closeModal} />}
      <Pagination
        current={current_page}
        total={total_count}
        pageSize={20}
        onChange={(page) => getPaginatedMovies(page, field ? field : 'id', 'desc')}
        showLessItems={true}
      />
    </div>
  )
}

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 50px;
  justify-content: center;
`

export default PaginatedMovies
