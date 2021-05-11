import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Button = (props) => {
  const btnPress = () => {
    props.setStep(props.step);
  };

  return (
    <button className="btn" onClick={btnPress}>
      {props.step}
    </button>
  );
};

Button.propTypes = {
  step: PropTypes.string,
};

export default Button;
