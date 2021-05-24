const Button = (props) => {
  // Get index for button pressed
  const i = parseInt(props.step) - 1;

  const click = () => {
    // Create new visible array to set as new state
    const newArr = props.visible.map((value, index) => {
      if (index === i) {
        return true;
      } else {
        return false;
      }
    });
    props.setVisible(newArr);
    props.setStep('Steg' + props.step);
  };

  return (
    <button className="btn" onClick={click}>
      {props.step}
    </button>
  );
};

export default Button;
