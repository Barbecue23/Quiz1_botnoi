import React, { useState } from 'react';
import './App.css';

function NumberInput() {
  const [number, setNumber] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleConfirm = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value) && value >= 1) {
      let asterisks = '';
      for (let i = 1; i <= value; i++) {
        asterisks += '*'.repeat(i) + '<br>'; // เพิ่ม '*' และขึ้นบรรทัดใหม่ในแต่ละรอบ
      }
      for (let i = value-1; i >= 1; i--) {
        asterisks += '*'.repeat(i) + '<br>'; // ลด '*' และขึ้นบรรทัดใหม่ในแต่ละรอบ
      }
      setNumber(`${asterisks}`);
    } else {
      setNumber('');
    }
  };

  return (
    <div className="container">
      <div>
        <label className="inputContainer" htmlFor="numberInput">Input :</label>
        <input
          className="inputnumber"
          type="number"
          id="numberInput"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="confirmButton" onClick={handleConfirm}>Submit</button>
      </div>
      <div className='result' dangerouslySetInnerHTML={{ __html: number }}></div>
    </div>
  );
}

export default NumberInput;
