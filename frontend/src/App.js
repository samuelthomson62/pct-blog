import './sass/App.scss'
import HomePage from './pages/HomePage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
      <Header />
        <HomePage />
      <Footer />
</div>
  );
}

export default App;
