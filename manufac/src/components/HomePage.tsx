import '../index.css'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const handleRedirection = (type: string) => {
    switch (type) {
      case 'flavnoid':
        return navigate('/flavanoid')
      case 'gamma':
        return navigate('/gamma')
    }
  }

  return (
    <div className='buttonContainer'>
      <button className='button' onClick={() => handleRedirection('flavnoid')}>
        Get Flavanoids Analysis
      </button>
      <button className='button' onClick={() => handleRedirection('gamma')}>
        Get Gamma Analysis
      </button>
    </div>
  )
}

export default HomePage
