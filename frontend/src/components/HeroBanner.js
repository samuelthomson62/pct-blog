import React from 'react'
import OldSnowy from '../assets/old-snowy.jpg'
import FadeIn from '../components/FadeIn.js'

function HeroBanner() {

    // document.addEventListener('DOMContentLoaded ')
    window.addEventListener(`scroll`, function (e) {
        const heroOpacity = this.scrollY / 1000;
        let hero = document.querySelector(".hero-banner");

        if (!hero || hero == undefined) {
            return;
        }

        if (heroOpacity === 0) {
            hero.style.opacity = 1;
        }

        if (heroOpacity > 0) {
          hero.style.opacity = `${1 - heroOpacity * 1.15}`;
        }
      });


    return (
        <div className="hero-banner" >
            {/* <img className="hero-image" src={OldSnowy} alt="Cowboy Camping on Old Snowy Mountain" /> */}
            <div className="hero-banner-content">
                <div className="hero-title">
                    <FadeIn>
                        <h2 >Mountains give me shivers</h2>
                    </FadeIn>
                </div>

                {/* <div className="name-tag">
                    <FadeIn>
                    <svg class="arrow" width="246" height="228" viewBox="0 0 246 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_29_2)">
                            <path d="M10.101 155.505C9.27544 154.069 7.44164 153.573 6.00513 154.399C4.56861 155.225 4.07335 157.058 4.89894 158.495L10.101 155.505ZM205.48 0.683762C203.856 0.357378 202.275 1.40962 201.948 3.03401L196.629 29.505C196.303 31.1293 197.355 32.7108 198.98 33.0371C200.604 33.3635 202.185 32.3113 202.512 30.6869L207.24 7.15717L230.769 11.8849C232.394 12.2113 233.975 11.1591 234.302 9.53469C234.628 7.9103 233.576 6.32888 231.951 6.0025L205.48 0.683762ZM4.89894 158.495C43.4178 225.518 125.568 233.42 182.012 201.305C210.332 185.191 232.447 158.901 239.517 124.677C246.589 90.4445 238.515 48.7451 207.387 1.9631L202.392 5.28685C232.876 51.1014 240.309 91.1846 233.641 123.463C226.972 155.749 206.1 180.696 179.045 196.09C124.738 226.989 46.5822 218.982 10.101 155.505L4.89894 158.495Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_29_2" x="0.499466" y="0.62439" width="245.402" height="226.926" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_29_2"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_29_2" result="shape"/>
                            </filter>
                            </defs>
                        </svg>

                        <span>That's me!</span>
                    </FadeIn>
                </div> */}

            </div>
        </div>
    );
}

export default HeroBanner;