//components/Greeting.tsx
// ユーザーに名前を入力させ、それに基づいて挨拶を表示するReactコンポーネントを作成してみてや。
'use client'
import React from "react";
import { useState } from "react";

function Greeting({name}: {name: string}) {
    return <h1>こんにちは、{name}です</h1>;
}

function GreetingApp(){
    const [name,setName] = useState('renji');

    return(
        <div>
            <Greeting name={name} />
            <input
                className="border p-2 mt-4"
                type="text"
                placeholder="input name"
                onChange={(e) => setName(e.target.value)}
            ></input>
        </div>
    )
}

export default GreetingApp;