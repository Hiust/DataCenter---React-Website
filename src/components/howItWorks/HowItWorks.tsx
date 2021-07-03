import React from 'react'
import './styles.scss';
import operatingSystemSVG from '../../assets/Images/undraw_Operating_system_re_iqsc.svg'
import AccountSVG from '../../assets/Images/undraw_Account_re_o7id.svg'
import CelebrationSVG from '../../assets/Images/undraw_Celebration_re_kc9k.svg'

import { HeadLine } from '../base/headLine/HeadLine';

function HowItWorks() {
    const stages = [
    {
        headerText:"Create Your Account",
        paragraphText:"Sed ornare lectus at erat bibendum volutpat. Integer nisl turpis, efficitur et accumsan et, sollicitudin id libero. Phasellus sit amet efficitur tellus, sed condimentum sem. Nullam nec risus vel orci consequat malesuada sit amet non nisl. Sed condimentum nisi lorem, vitae viverra mi sollicitudin at. Fusce sed aliquet est.",
        image:operatingSystemSVG
    },
    {
        headerText:"Configure Service",
        paragraphText:"Sed ornare lectus at erat bibendum volutpat. Integer nisl turpis, efficitur et accumsan et, sollicitudin id libero. Phasellus sit amet efficitur tellus, sed condimentum sem. Nullam nec risus vel orci consequat malesuada sit amet non nisl. Sed condimentum nisi lorem, vitae viverra mi sollicitudin at. Fusce sed aliquet est.",
        image:AccountSVG
    },
    {
        headerText:"You’re ready to go!",
        paragraphText:"Sed ornare lectus at erat bibendum volutpat. Integer nisl turpis, efficitur et accumsan et, sollicitudin id libero. Phasellus sit amet efficitur tellus, sed condimentum sem. Nullam nec risus vel orci consequat malesuada sit amet non nisl. Sed condimentum nisi lorem, vitae viverra mi sollicitudin at. Fusce sed aliquet est.",
        image:CelebrationSVG
    }]

    return (
            <div className="howitworks">
                <div className="howitworks-container">
                    <HeadLine
                        headLineStyle="hl--r"
                        headerText="How does it work?"
                        paragraphText="Mauris consequat non erat id malesuada. Etiam fermentum feugiat molestie. Aliquam erat volutpat. Etiam sem risus, elementum at dignissim vel, faucibus et diam."
                    />

                    {stages.map((stage, i) => {
                        const headLineStyle = (i%2 === 0) ? "hl--l" : "hl--r"
                        return (
                            <HeadLine
                                key={i}
                                headLineStyle={headLineStyle}
                                headerText={stage.headerText}
                                paragraphText={stage.paragraphText}
                                image={stage.image}
                            />
                        )
                    })}
                </div>
            </div>
    )
}

export default HowItWorks
