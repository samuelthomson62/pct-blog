import React, { useEffect, useState } from 'react'

function Header() {
  const [ slug, setSlug ] = useState("default");

  useEffect(() => {
      setSlug(window.location.pathname.slice(1)); 
  }, []);

    return (
      <header>
        <nav>
              <a href="/" className={ slug === "" ? "selected" : "" } >
                Home
              </a>
              <a href="/pct-media-reel" className={ slug === "pct-media-reel" ? "selected" : "" }>
                PCT Media Reel
              </a>
              <a href="/about-me" className={ slug === "about-me" ? "selected" : "" }>
                About Me
              </a>
              <a href="/contact" className={ slug === "contact" ? "selected" : "" }>
                Contact
              </a>
            </nav>
      </header>
    );
}

export default Header;