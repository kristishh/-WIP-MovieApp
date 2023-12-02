import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from 'react-router-dom'
import AddContent from './components/main/addContent/AddContent'
import Discover from './components/main/discover/Discover'
import Navigation from './components/navigation/Navigation'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { store } from './store/store'
import styled from 'styled-components'
import useScreenSize from './hooks/useScreenSize'
import { wrapperI } from './globals/interfaces'

const MovieApp = () => {
  const screenSize = useScreenSize() 

  return (
    <Provider store={store}>
      <Wrapper screenSize={screenSize}>
        <Navigation />
        <Routes>
          <Route path={'/discover'} element={<Discover />} />
          <Route path='*' element={<Discover />} />
          <Route path='/add-content' element={<AddContent />} />
        </Routes>
        <StyledToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
        />
      </Wrapper>
    </Provider>
  )
}

const Wrapper = styled.div<wrapperI>`
  display: flex;
  flex-direction: row;

  ${({ screenSize }) => screenSize !== 'bigScreen' && `
    flex-direction: column;
  `}
`

const StyledToastContainer = styled(ToastContainer)`
  
`

export default MovieApp
