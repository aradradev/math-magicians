import React from 'react';
import PropTypes from 'prop-types';

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

export default Button;
