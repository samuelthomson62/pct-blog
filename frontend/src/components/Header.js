import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Router>
          <Routes>
            <Route path="/">
              Home
            </Route>
            <Route path="/PCT-Media-Real">
              PCT Media Real
            </Route>
            <Route path="/About-Me">
              About Me
            </Route>
            <Route path="Contact">
              Contact
            </Route>
          </Routes>
        </Router>

        {/* <nav>
              <a class="selected">
                Home
              </a>
              <a>
                PCT Media Reel
              </a>
              <a>
                About Me
              </a>
              <a>
                Contact
              </a>
            </nav> */}
      </header>
    );
  }
}

export default Header;