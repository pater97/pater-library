//React functionalities
import React from "react";
import propTypes from "prop-types";

const CustomButton = (props) => {

  const handleClick = () => {
    props.Callback();
  };

  return (
    <div
      onClick={handleClick}
      style={props.buttonContainerStyle}
    >
      <h6 style={props.buttonTextStyle}>{props.label}</h6>
      {props.children}
    </div>
  );
};

CustomButton.propTypes = {
  Callback: propTypes.func.isRequired,
  children: propTypes.any,
  label: propTypes.any,
  buttonContainerStyle: propTypes.any,
  buttonTextStyle: propTypes.any,
};

export default CustomButton;
