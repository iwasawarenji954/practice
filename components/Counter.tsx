'use client';
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [oddEven, setOddEven] = useState(0);
  const [number, setNumber] = useState(0);

  // Increaseボタン用のハンドラー関数
  const handleIncrease = () => {
    if (number) {
      if (count + number <= 10) {
        setCount(count + number);
      }
    } else {
      alert("数値を入力してください");
    }
  };

  // Decreaseボタン用のハンドラー関数
  const handleDecrease = () => {
    if (number) {
      if (count - number >= 0) {
        setCount(count - number);
      }
    } else {
      alert("数値を入力してください");
    }
  };

  return (
    <div className="counter">
      {/* 三項演算子 条件 ? 真の時の処理 : 偽の時の処理 */}
      {oddEven === 0 && count % 2 === 0 ? (
        <h1>Current Count: {count} (Show Even)</h1>
      ) : oddEven === 1 && count % 2 === 1 ? (
        <h1>Current Count: {count} (Show Odd)</h1>
      ) : (
        <h1>No matching count</h1>
      )}

      {/* 数値を入力するフィールド */}
      <input
        type="number"
        placeholder="増減量を入力"
        value={number || ""}  // 値がundefinedのときは空文字を表示
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      {/* Increaseボタン */}
      <button 
        className="m-4 bg-white" 
        onClick={handleIncrease}
      >
        Increase
      </button>

      {/* Decreaseボタン */}
      <button 
        className="m-4 bg-white"
        onClick={handleDecrease}
      >
        Decrease
      </button>

      {/* Resetボタン */}
      <button 
        className="m-4 bg-white"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
      
      {/* 奇数表示フィルタ */}
      <button 
        className="m-4 bg-white" 
        onClick={() => setOddEven(1)}
      >
        Show Odd
      </button>
      
      {/* 偶数表示フィルタ */}
      <button 
        className="m-4 bg-white"
        onClick={() => setOddEven(0)}
      >
        Show Even
      </button>

    </div>
  );
}

export default Counter;
