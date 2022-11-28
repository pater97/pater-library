import React from 'react'
import './flipCard.scss'
import propTypes from "prop-types";

const FlipCard = (props) => {
  return (
    <div className="flipCardContainer">
        <div className="flip flip1" >
            <span style={{ backgroundImage: `url(${props.photoOne})`}}></span>
            <span style={{ backgroundImage: `url(${props.photoOne})`}}></span>
            <span style={{ backgroundImage: `url(${props.photoOne})`}}></span>
            <span style={{ backgroundImage: `url(${props.photoOne})`}}></span>
            <span style={{ backgroundImage: `url(${props.photoOne})`}}></span>
        </div>
        <div className="flip flip2" >
            <span style={{ backgroundImage: `url(${props.photoTwo})`}}></span>
            <span style={{ backgroundImage: `url(${props.photoTwo})`}}></span>
            <span style={{ backgroundImage: `url(${props.photoTwo})`}}></span>
            <span style={{ backgroundImage: `url(${props.photoTwo})`}}></span>
            <span style={{ backgroundImage: `url(${props.photoTwo})`}}></span>
        </div>
    </div>
  )
}

FlipCard.propTypes = {
    photoOne: propTypes.any.isRequired,
    photoTwo: propTypes.any.isRequired,
}

export default FlipCard;