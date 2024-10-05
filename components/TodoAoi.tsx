'use client';
import React, { useState } from 'react';

// Todo型を定義
type Todo = {
    text: string;
    completed: boolean;
  };

function Todo() {
    // 型を指定して、todos配列を定義
  const [todos, setTodos] = useState<Todo[]>([]);
//   const [todos, setTodos] = useState([]); // タスクのリスト
  const [task, setTask] = useState('');   // 新しいタスクの入力状態

  // タスクを追加するハンドラー関数
  const handleAddTask = () => {
    if (task) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask(''); // 入力フィールドをクリア
    } else {
      alert("タスクを入力してください");
    }
  };

  // タスクを完了済みにするハンドラー関数
  const handleToggleComplete = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos); // 更新されたリストをセット
  };

  // 完了済みのタスクを削除するハンドラー関数
  const handleDeleteTask = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index); //_は引数を渡さないという意味
    setTodos(updatedTodos); // 更新されたリストをセット
  };

  // すべてのタスクを削除するハンドラー関数
  const handleDeleteAllTasks = () => {
    setTodos([]); // todosを空の配列にして全タスクを削除
  };

  return (
    <div className="todo-app">
      <h1>Todoリスト</h1>

      {/* タスク入力 */}
      <input
        type="text"
        placeholder="新しいタスクを入力"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      {/* タスクを追加するボタン */}
      <button className="m-4 bg-white" onClick={handleAddTask}>
        Add Task
      </button>

      {/* タスクリストの表示 */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(index)}
            />
            {todo.text}
            
            {/* タスクを完了済みにするボタン */}
            <button className="m-4 bg-white" onClick={() => handleToggleComplete(index)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>

            {/* タスクを削除するボタン */}
            <button className="m-4 bg-white" onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button className="m-4 bg-white" onClick={handleDeleteAllTasks}>
              Delete All
      </button>
    </div>
  );
}

export default Todo;
