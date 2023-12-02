import { BrowserRouter } from 'react-router-dom'
import MovieApp from './MovieApp'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <BrowserRouter>
      <MovieApp />
    </BrowserRouter>
)
