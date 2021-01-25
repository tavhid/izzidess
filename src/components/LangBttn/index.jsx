import './index.sass'
import { useDispatch } from 'react-redux'
import { setLang } from '../../actions'

const Langbttn = () => {
  const dispatch = useDispatch()

  return ( 
    <div className="lang-btn">
      <button 
        onClick={() => dispatch(setLang('ru'))}
      >русский</button>
      <button 
        onClick={() => dispatch(setLang('en'))}
      >английский</button>
    </div>
  )
}
 
export default Langbttn