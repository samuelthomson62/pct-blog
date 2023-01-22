import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {

    render() 
    {
        return (
            <header>
            <nav>
              <a class="selected">
                Home
              </a>
              <a>
                PCT Media Reel
              </a>
              <a>
                About
              </a>
              <a>
                Contact
              </a>
            </nav>
          </header>
        );
    }
}

export default Header;