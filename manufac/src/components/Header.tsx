import { LOGO_URL, LINKEDIN } from '../common/constant'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleHomeRedirection = () => navigate('/')
  const handleAboutMe = () => window.open(LINKEDIN)
  return (
    <div className='headerContainer'>
      <img
        className='logo'
        src={LOGO_URL}
        alt='manufac logo'
        onClick={handleHomeRedirection}
      />
      <h3 onClick={handleAboutMe}>About Developer</h3>
    </div>
  )
}
export default Header
