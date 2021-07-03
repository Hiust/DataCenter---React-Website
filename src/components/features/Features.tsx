import React from 'react'
import './styles.scss';
import { HeadLine } from '../base/headLine/HeadLine';
import Card from './Card';

function Features() {
    return (
        <>
            <div className="features">
                <div className="features-container">
                    <div className="headline">
                        <HeadLine
                            headLineStyle="hl--c"
                            headerText="Features"
                            paragraphText="Suspendisse vitae auctor nulla. Phasellus ultricies dictum urna, sed pulvinar massa pretium at. Vivamus porttitor erat elit, non consectetur magna fringilla quis. Suspendisse aliquam ipsum at ipsum mattis imperdiet sed quis lacus."/>
                    </div>
                    <div className="cards">
                        <Card title="Cloud" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in auctor sapien, eu porta orci. Aenean nunc sapien, faucibus ut urna ac, feugiat tempus elit Lorem ipsum dolor sit amet"></Card>
                        <Card title="Security" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in auctor sapien, eu porta orci. Aenean nunc sapien, faucibus ut urna ac, feugiat tempus elit Lorem ipsum dolor sit amet"></Card>
                        <Card title="Performance" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in auctor sapien, eu porta orci. Aenean nunc sapien, faucibus ut urna ac, feugiat tempus elit Lorem ipsum dolor sit amet"></Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Features)
