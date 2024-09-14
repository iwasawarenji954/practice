//components/CountUp.tsx
// 目的: ユーザーがクリックするたびにカウントが増えるボタンを実装する。
// 要件:
// ボタンをクリックすると、カウントが1つずつ増える。
// カウントは画面上に表示される。
// 初期値は0とする。

//マイナスもやってみたいよな

'use client'
import React from "react";
import { useState } from "react";

function Count({count}: {count: number}){
    return <h1>{count}</h1>;
}

function CountApp(){
    const [count,setCount] = useState(0);
    const handleClickAdd = () => {
        setCount(count +1);
    }
    const handleClick = () => {
        setCount(count -1);
    }

    return(
        <div>
            <Count count={count} />
            <button 
                className="bg-blue-400 p-10"
                onClick = {handleClickAdd}
            >
                +1
            </button>
            <button 
                className="bg-blue-400 p-10"
                onClick = {handleClick}
            >
                -1
            </button>
        </div>

    )
}

export default CountApp;