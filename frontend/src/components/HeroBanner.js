import React from "react";
import ReactDOM from "react-dom";

class HeroBanner extends React.Component {
    render() {
        return (
            <div class="hero-banner">
                <img src="/mount-shasta.jpg" alt="Mount Shasta" /> 
                <div class="hero-banner-content">
                    <h2>PCT Media Reel</h2>
                </div>
            </div>
        );
    }
}

export default HeroBanner;