import React, { useEffect, useState } from 'react'
import './styles.scss';
import goingUpSVG from '../../assets/Images/undraw_going_up_ttm5.svg'
import { HeadLine } from '../base/headLine/HeadLine';

function Hero() {

    const [mobile, setmobile] = useState(false)

    const changeLayout = () => {
        if(window.innerWidth <= 980) {
            setmobile(true)
        } else {
            setmobile(false)
        }
    }

    useEffect(() => {
        changeLayout();
    }, []);

    window.addEventListener('resize',changeLayout);

    const heroText = {
        title:"Next level of data protecting",
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in auctor sapien, eu porta orci. Aenean nunc sapien, faucibus ut urna ac, feugiat tempus elit"
    }

    return (
            <div className={mobile ? 'hero mobile' : 'hero'}>
                <div className="hero-container">
                    <HeadLine
                        headLineStyle={mobile ? "hl--c" : ""}
                        headerText={heroText.title}
                        paragraphText={heroText.paragraph}/>
                    <img src={goingUpSVG} alt="hero"/>
                </div>
            </div>
    )
}

export default Hero
