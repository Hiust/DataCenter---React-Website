import React from 'react'
import './styles.scss';

type Props = {
    title:string,
    paragraph:string,
}

function Card(props:Props) {
    return (
        <>
            <div className="card">
                <div className="card-container">
                    <div className="title">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="line"></div>
                    <p>{props.paragraph}</p>
                </div>
            </div>
        </>
    )
}

export default Card