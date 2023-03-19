import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './sass/App.scss'
import HomePage from './pages/HomePage.js'
import ContactPage from './pages/ContactPage.js'
import PctMediaReelPage from './pages/PctMediaReelPage.js'
import AboutMePage from './pages/AboutMePage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  return (
      <div>
      
        <Header />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <HomePage />} />
              <Route path="/pct-media-reel" element={ <PctMediaReelPage /> } />
              <Route path="/about-me" element={ <AboutMePage /> } />
              <Route path="/contact" element={ <ContactPage /> } />
            </Routes>
          </BrowserRouter>

        <Footer />

      </div>
  );
}

export default App;
