import React from 'react'

class Header extends React.Component {
  constructor() {
    super();
    this.state = { 
      // selectedNavItem: GetSelectedNavItem() 
      slug: window.location.pathname
    };
  }

  render() {
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
                About Me
              </a>
              <a>
                Contact
              </a>
            </nav>
      </header>
    );
  }

  GetSelectedNavItem() {
    document.addEventListener("DOMContentLoaded", () => 
    {
      var navigation = document.querySelector("nav");

      if (navigation == null || navigation == undefined || navigation.childNodes.length <= 0) {
        return "";
      }

      var slug = window.location.pathname;

      navigation.childNodes.forEach((navItem) => 
      {
        if (navItem.href == slug)
      });


    }); 
  }
}

export default Header;