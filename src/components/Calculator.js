import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const operatorSigns = ['÷', 'x', '-', '+', '='];

const Button = ({ label, handleClick }) => {
  const isOperator = operatorSigns.includes(label);
  const buttonClass = isOperator ? 'operatorButton' : '';
  const buttonWidth = label === '0' ? 'doubleWidthButton' : '';

  return (
    <button
      className={`${buttonClass} ${buttonWidth}`}
      type="button"
      onClick={() => handleClick(label)}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const Calculator = () => {
  const [display, setDisplay] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const result = calculate(display, buttonName);
    setDisplay(result);
  };

  const { total, next, operation } = display;

  return (
    <div className="calculator">
      <div className="display">
        {total}
        {' '}
        {operation}
        {' '}
        {next}
      </div>
      <div className="buttons">
        <Button label="AC" handleClick={handleClick} />
        <Button label="+/-" handleClick={handleClick} />
        <Button label="%" handleClick={handleClick} />
        <Button label="÷" handleClick={handleClick} />

        <Button label="7" handleClick={handleClick} />
        <Button label="8" handleClick={handleClick} />
        <Button label="9" handleClick={handleClick} />
        <Button label="x" handleClick={handleClick} />

        <Button label="4" handleClick={handleClick} />
        <Button label="5" handleClick={handleClick} />
        <Button label="6" handleClick={handleClick} />
        <Button label="-" handleClick={handleClick} />

        <Button label="1" handleClick={handleClick} />
        <Button label="2" handleClick={handleClick} />
        <Button label="3" handleClick={handleClick} />
        <Button label="+" handleClick={handleClick} />

        <Button label="0" handleClick={handleClick} />
        <Button label="." handleClick={handleClick} />
        <Button label="=" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
