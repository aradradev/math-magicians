import React from 'react';

const operatorSigns = ['÷', 'x', '-', '+', '='];
// eslint-disable-next-line react/prop-types
const Button = ({ label }) => {
  const isOperator = operatorSigns.includes(label);
  const buttonClass = isOperator ? 'operatorButton' : '';
  const buttonWidth = label === '0' ? 'doubleWidthButton' : '';

  return (
    <button className={`${buttonClass} ${buttonWidth}`} type="button">
      {label}
    </button>
  );
};

const Calculator = () => (
  <div className="calculator">
    <div className="display">0</div>

    <div className="buttons">
      <Button label="AC" />
      <Button label="+/-" />
      <Button label="%" />
      <Button label="÷" />

      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="x" />

      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" />

      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" />

      <Button label="0" />
      <Button label="." />
      <Button label="=" />
    </div>
  </div>
);

export default Calculator;
