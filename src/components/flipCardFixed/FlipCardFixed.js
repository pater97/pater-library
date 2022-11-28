import React from 'react'
import './flipCardFixed.scss'
import propTypes from "prop-types";

const FlipCardFixed = (props) => {
  return (
    <div className="flipCardFixedcontainer" style={{height:props.height,width:props.width}}>
        <div className="flip flip1" >
            <span style={{ backgroundImage: `url(${props.photoOne})`,width:props.spandDivision}}></span>
            <span style={{ backgroundImage: `url(${props.photoOne})`,width:props.spandDivision}}></span>
            <span style={{ backgroundImage: `url(${props.photoOne})`,width:props.spandDivision}}></span>
            <span style={{ backgroundImage: `url(${props.photoOne})`,width:props.spandDivision}}></span>
            <span style={{ backgroundImage: `url(${props.photoOne})`,width:props.spandDivision}}></span>
        </div>
        <div className="flip flip2" >
            <span style={{ backgroundImage: `url(${props.photoTwo})`,width:props.spandDivision}}></span>
            <span style={{ backgroundImage: `url(${props.photoTwo})`,width:props.spandDivision}}></span>
            <span style={{ backgroundImage: `url(${props.photoTwo})`,width:props.spandDivision}}></span>
            <span style={{ backgroundImage: `url(${props.photoTwo})`,width:props.spandDivision}}></span>
            <span style={{ backgroundImage: `url(${props.photoTwo})`,width:props.spandDivision}}></span>
        </div>
    </div>
  )
}

FlipCardFixed.propTypes = {
    photoOne: propTypes.any.isRequired,
    photoTwo: propTypes.any.isRequired,
    height: propTypes.string.isRequired,
    width:propTypes.string.isRequired,
    spandDivision: propTypes.string.isRequired
}

export default FlipCardFixed;