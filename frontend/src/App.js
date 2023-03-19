import './sass/App.scss'
import HomePage from './pages/HomePage.js'
import ContactPage from './pages/ContactPage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <div>
        <Header />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <HomePage />} />
              <Route path="/Contact" element={ <ContactPage /> } />
            </Routes>
          </BrowserRouter>

        <Footer />
      </div>
  );
}

export default App;
