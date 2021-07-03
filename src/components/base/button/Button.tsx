import React from 'react'
import './styles.scss';
import { Link } from 'react-router-dom'


const STYLES = ['btn--primary', 'btn--green']

type Props = {
    children: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    buttonStyle?: string
}

export const Button = ({children, onClick, buttonStyle=""}:Props) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    return (
        <Link to='/sign-up' className='btn'>
            <button className={`btn ${checkButtonStyle}`} onClick={onClick}>
                {children}
            </button>
        </Link>
    )
}