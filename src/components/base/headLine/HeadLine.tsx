import React from 'react'
import './styles.scss';

const POSITIONS = ['hl--l', 'hl--c', 'hl--r']

type Props = {
    headLineStyle?: string
    headerText: string
    paragraphText?: string
    image?: string
}

export const HeadLine = ({headLineStyle="", headerText, paragraphText, image}:Props) => {
    const checkHeadLinePosition = POSITIONS.includes(headLineStyle) ? headLineStyle : POSITIONS[0]

    return (
        <div className={`hl ${checkHeadLinePosition}`}>
            <div className="text">
                <h1>{headerText}</h1>
                {paragraphText && <p>{paragraphText}</p>}
            </div>
            {image && <img src={image} alt="img"/>}
        </div>
    )
}