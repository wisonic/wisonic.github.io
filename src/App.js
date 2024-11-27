// src/App.js
import React, { useState } from "react";
import "./App.css";
import { evaluate } from 'mathjs';

function App() {
  // 状态管理：显示内容和当前输入值
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  // 点击按钮时更新显示内容
  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  // 清除输入和结果
  const handleClear = () => {
    setDisplay("");
    setResult("");
  };

  // 计算结果
  const handleCalculate = () => {
    try {
      // 使用 mathjs 解析并计算表达式
      const evalResult = evaluate(display);
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>👏欢迎大佬前来视察👏</h1>
        <h1>My Calculator</h1>
        {/* 显示屏 */}
        <div className="display">
          <p>{display || "0"}</p>
          <p className="result">{result && `= ${result}`}</p>
        </div>

        {/* 按钮 */}
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
            <button onClick={() => handleClick("+")}>+</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button onClick={() => handleClick("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button onClick={() => handleClick("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={handleClear}>C</button>
            <button onClick={() => handleClick("0")}>0</button>
            <button onClick={handleCalculate}>=</button>
            <button onClick={() => handleClick("/")}>/</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;