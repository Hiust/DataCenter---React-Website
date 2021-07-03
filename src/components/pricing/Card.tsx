import React from 'react'
import './styles.scss';

import { Button } from '../base/button/Button';
import Option from './Option';

type OptionData = {
    active: boolean,
    text: string
}

type Props = {
    title:string,
    price:string,
    options: {[key: number]: OptionData}
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
                    <h1>{props.price}$</h1>
                    <p>per user/month</p>

                    {
                        Object.keys(props.options).map((key, index) => (
                            <Option key={key} active={props.options[index].active} description={props.options[index].text}></Option>
                        ))
                    }

                    <Button children="Start your trial" onClick={() => console.log('asd')} buttonStyle="btn--green"></Button>
                </div>
            </div>
        </>
    )
}

export default React.memo(Card)