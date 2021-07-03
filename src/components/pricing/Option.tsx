import React from 'react'
import './styles.scss';

import activeSVG from '../../assets/Images/active.svg'
import deactiveSVG from '../../assets/Images/deactive.svg'

type Props = {
    active:Boolean,
    description:string,
}

function Option(props:Props) {
    return (
        <>
            <div className="option">
                {props.active ? <img src={activeSVG} alt="active"></img> : <img src={deactiveSVG} alt="deactive"></img>}
                <p>{props.description}</p>
            </div>
        </>
    )
}

export default React.memo(Option)