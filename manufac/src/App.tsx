import { lazy, Suspense } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const FlavanoidsAnalysis = lazy(() => import('./components/FlavanoidsAnalysis'))
const GammaAnalysis = lazy(() => import('./components/GammaAnalysis'))

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/flavanoid'
            element={
              <Suspense fallback='Loading....'>
                <FlavanoidsAnalysis />
              </Suspense>
            }
          />
          <Route
            path='/gamma'
            element={
              <Suspense fallback='Loading....'>
                <GammaAnalysis />
              </Suspense>
            }
          />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
