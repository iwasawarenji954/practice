'use client';
import React, { useState } from "react";

function NameForm() {
    const [name, setName] = useState(''); //初期は空文字
    const [submittedName, setSubmittedName] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // エラーメッセージの状態

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name === '') {
            // 名前が空の場合はエラーメッセージを表示
            setErrorMessage('名前を入力してください');
        } else {
            // 名前が入力されていればエラーを消し、名前をセット
            setErrorMessage('');
            const reversedName = name.split('').reverse().join('');
            setSubmittedName(reversedName);
            setName(''); // 入力フィールドを空にする
        }
    };

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittedName('');
        setErrorMessage(''); // リセット時にエラーメッセージもクリア
        setName(''); // 入力フィールドを空にする
    };

    return (
        <div>
            <h1>Hello, {submittedName || 'Your Name'}</h1>

            {/* エラーメッセージを表示 */}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">Submit</button>
                <button onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
}

export default NameForm;
