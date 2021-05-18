const Button = (props) => {
  const i = parseInt(props.step) - 1;

  const click = () => {
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
