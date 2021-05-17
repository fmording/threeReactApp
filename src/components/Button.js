import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  const i = props.path.toString().slice(-1) - 1;
  const Click = () => {
    // props.visible.forEach((value, index) => {
    //   index = i ? (value = true) : (value = false);
    // });
    // console.log(props.visible);

    props.visible.map((element, index) => {
      element = false;
      if (index === i) {
        element = true;
      }
      return element;
    });
    console.log(props.visible);
  };

  return <button className="btn" onClick={Click}></button>;
};

export default Button;
