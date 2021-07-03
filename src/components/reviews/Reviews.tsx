import React from 'react'
import './styles.scss';
import { HeadLine } from '../base/headLine/HeadLine';
import Review from './Review';
import feedbackSVG from '../../assets/Images/undraw_Project_feedback_re_cm3l.svg'

function Reviews() {
    return (
            <div className="reviews">
                <div className="reviews-container">
                    <div className="left-side">
                        <HeadLine
                            headerText="Reviews"
                            paragraphText="Sed ornare lectus at erat bibendum volutpat. Integer nisl turpis, efficitur et accumsan et, sollicitudin id libero."/>

                        <img src={feedbackSVG} alt="feedback"></img>
                    </div>

                    <div className="right-side">
                        <Review></Review>
                        <Review></Review>
                        <Review></Review>
                    </div>
                </div>
            </div>
    )
}

export default Reviews
