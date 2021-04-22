import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      Play/Pause
    </button>
  );
};

Button.propTypes = {};

export default Button;
