import React, { useState } from "react";
import "./multiImage.scss";
import propTypes from "prop-types";

const MultiImage = (props) => {

    const [activeClass,setActive] = useState(1)

    const setActiveClass = (number) => () => {
        setActive(number)
    }

  return (
    <div className="options" style={{backgroundColor:props.bgColor}}>
      <div onClick={setActiveClass(1)} style={{ backgroundImage: `url(${props.photoOne})`}} className={`option photoOne ${activeClass === 1 ? 'active' : ''}`}></div>
      <div onClick={setActiveClass(2)} style={{ backgroundImage: `url(${props.photoTwo})`}} className={`option photoTwo ${activeClass === 2 ? 'active' : ''}`}></div>
      <div onClick={setActiveClass(3)} style={{ backgroundImage: `url(${props.photoTrhee})`}} className={`option photoTrhee ${activeClass === 3 ? 'active' : ''}`}></div>
      {
        props.PhotoNumber >= 4 &&
        <div onClick={setActiveClass(4)} style={{ backgroundImage: `url(${props.photoFour})`}} className={`option photoTrhee ${activeClass === 4 ? 'active' : ''}`}></div>
      }
      {
        props.PhotoNumber >= 5 && 
        <div onClick={setActiveClass(5)} style={{ backgroundImage: `url(${props.photoFive})`}} className={`option photoTrhee ${activeClass === 4 ? 'active' : ''}`}></div>
      }
    </div>
  );
}

MultiImage.propTypes = {
    PhotoNumber: propTypes.number,
    photoOne: propTypes.any.isRequired,
    photoTwo: propTypes.any.isRequired,
    photoTrhee: propTypes.any.isRequired,
    photoFour: propTypes.any,
    photoFive:propTypes.any,
    bgColor:propTypes.string
}

export default MultiImage;
