//components/ToDo.tsx
// 目的: ユーザーが新しいToDo（やること）を追加できるシンプルなToDoリストを実装する。
// 要件:
// ユーザーがテキストを入力して「追加」ボタンを押すと、ToDoがリストに追加される。
// ToDoリストは画面上に表示される。
// 各ToDoの横に「削除」ボタンを追加し、ToDoを削除できるようにする。
'use client'
import { table } from "console";
import React from "react";
import {useState} from "react";

function ToDoApp(){
    const [todos,setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const [enterCount, setEnterCount] = useState(0);  // Enterキーが押された回数を管理
    
    const handleAddTodo = () => {
        if(newTodo.trim() === '') return; //空なら追加しない
        setTodos([...todos, newTodo]);
        setNewTodo('');
    };

    const handleDelete = (indexToDelete: number) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
        //todosの要素とindexを参照してindexがindexToDeleteじゃないやつだけで配列を並べ直してるfilterで
    };
      

    return(
        <div>
            <input
                type="text"
                placeholder="新しいToDoを入力"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}  // 入力が変更されたら状態を更新
                onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    // Enterキーが押されたらカウントを増やす
                    setEnterCount(enterCount + 1);
                
                    // 2回目のEnterキー押下でToDoを追加する
                if (enterCount + 1 === 2) {
                    handleAddTodo();
                    setEnterCount(0);  // カウントをリセットする
                }
                } else {
                    // Enter以外のキーが押されたらカウントをリセット
                    setEnterCount(0);
                }
            }}
            />
            <button
                className="bg-blue-300"
                onClick={handleAddTodo}
            >
                追加
            </button>

            <div>
                {todos.map((todo, index) => (
                <div key={index}>
                    {todo}  {/* 各ToDoを表示 */}
                    <button onClick={() => handleDelete(index)}>削除</button>
                </div>
                
                ))}
            </div>
        </div>
    )
}

export default ToDoApp;