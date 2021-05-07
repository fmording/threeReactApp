import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      Play/Pause
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
