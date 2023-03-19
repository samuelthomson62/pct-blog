import React from 'react'

class HeroBanner extends React.Component {
    render() {
        return (
            <div className="hero-banner">
                <img src="/mount-shasta.jpg" alt="Mount Shasta" /> 
                <div className="hero-banner-content">
                    <h2>PCT Media Reel</h2>
                </div>
            </div>
        );
    }
}

export default HeroBanner;