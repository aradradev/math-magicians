import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Buttons';

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
