'use client';

import React, { useState } from "react";

//子コンポーネント
function Greeting(props: {name: string, age: number}) {
    return <h1>Hello, {props.name}! You are {props.age} years old!</h1>;
}

function ColorButton(props: {bgcolor: string}) {
    return (
        <button style={{ backgroundColor: props.bgcolor}}>
            BUTTON
        </button>
    )
}

function WhichButton(props: { number: string, onClick: () => void }) {
    return (
        <button onClick={props.onClick}>
            Button {props.number}
        </button>
    );
}

//親コンポーネント
function PropsApp() {
    const [clickedButton, setClickedButton] = useState('');

    const handleClick = (buttonNumber: string) => {
        setClickedButton(`Button ${buttonNumber} was clicked.`);
    };

    return (
        <div>
            <Greeting 
                name = "葵" 
                age = {25}
            />
            <ColorButton 
                bgcolor="orange"
            />
            <WhichButton number="1" onClick={() => handleClick("1")} />
            <WhichButton number="2" onClick={() => handleClick("2")} />
            <WhichButton number="3" onClick={() => handleClick("3")} />

            {/* どのボタンがクリックされたか表示 */}
            {clickedButton && <p>{clickedButton}</p>}
        </div>
    );
}

export default PropsApp;