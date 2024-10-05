// /app/page.tsx
'use client';
import GreetingApp from '@/components/Greeting';
import CountApp from "@/components/CountUp";
import ToDoApp from "@/components/ToDo";
import ToggleApp from "@/components/Toggle";
import Counter from '@/components/Counter';
import Todo from '@/components/TodoAoi';

export default function Home() {
  return (
    <div>
      <section className="bg-gray-300 p-3 m-3">
        <div className="text-gray-500 text-xl">
          <p>練習問題１</p>
          <p>入力した文字をリアルタイムで表示</p>
        </div>
        <GreetingApp />
      </section>

      <section className="bg-gray-300 p-3 m-3">
        <div className="text-gray-500 text-xl">
          <p>練習問題2</p>
          <p>ボタンでカウントする</p>
        </div>
        <CountApp />
      </section>

      <section className="bg-gray-300 p-3 m-3">
        <div className="text-gray-500 text-xl">
          <p>練習問題3</p>
          <p>Todo</p>
        </div>
        <ToDoApp />
      </section>

      <section className="bg-gray-300 p-3 m-3">
        <div className="text-gray-500 text-xl">
          <p>練習問題4</p>
          <p>Toggle</p>
        </div>
        <ToggleApp />
      </section>
      <section className="bg-gray-300 p-3 m-3">
        <div className="text-gray-500 text-xl">
          <p>練習問題5</p>
          <p>Counter</p>
        </div>
        <Counter />
      </section>
      <section className="bg-gray-300 p-3 m-3">
        <div className="text-gray-500 text-xl">
          <p>練習問題6</p>
          <p>ToDoAoi</p>
        </div>
        <Todo />
      </section>
    </div>
  )
}
