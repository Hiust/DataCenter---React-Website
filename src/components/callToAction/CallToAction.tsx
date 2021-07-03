import React from 'react'
import './styles.scss';

import { HeadLine } from '../base/headLine/HeadLine';
import { Button } from '../base/button/Button'

function CallToAction() {
    return (
            <div className="calltoaction">
                <div className="calltoaction-container">
                    <HeadLine
                        headLineStyle="hl--c"
                        headerText="Free trial"
                        paragraphText="Etiam in pharetra massa. Sed eu pretium ipsum, semper pulvinar libero."/>
                    <Button onClick={() => console.log('call to action')}>Start your trial</Button>
                </div>
            </div>
    )
}

export default CallToAction
