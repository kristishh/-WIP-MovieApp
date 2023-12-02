import Horizontal from './Horizontal'
import Vertical from './Vertical'
import { useNavigate } from 'react-router-dom'
import useScreenSize from '../../hooks/useScreenSize'

const Navigation = () => {
  const screenSize = useScreenSize() 
  const navigate = useNavigate()
  
  if (screenSize === 'bigScreen') {
    return <Vertical screenSize={screenSize} navigate={navigate}/>
  } else {
    return <Horizontal screenSize={screenSize} navigate={navigate} />
  }
}

export default Navigation
