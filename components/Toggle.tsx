// components/Toggle.tsx
// 練習問題: トグルボタンで表示/非表示を切り替える
// 目的
// ボタンをクリックするたびに、特定のテキストや要素の表示/非表示を切り替えるトグル機能を実装する。
// 要件
// 「表示/非表示」を切り替えるボタンを作成する。
// ボタンをクリックするたびに、特定の要素が画面に表示されるか、非表示にされる。
// 初期状態は「非表示」。

'use client'
import React from "react";
import {useState} from "react";

// トグルで表示されるコンテンツを別コンポーネントに分ける
function ToggleContent() {
  return <p>トグルで表示/非表示になるコンテンツ</p>;
}

function ToggleApp() {
  // 表示状態を管理するステート
  const [isVisible, setIsVisible] = useState(false);
  // 表示/非表示を切り替える関数
  const handleToggle = () => {
    setIsVisible(!isVisible);  // 現在の状態を反転させる
  };

  return (
    <div>
      {/* 表示/非表示を切り替えるボタン */}
      <button onClick={handleToggle}>
        {isVisible ? '非表示にする' : '表示する'}
      </button>

      {/* 表示状態に応じてコンテンツをトグル */}
      {isVisible && <ToggleContent />}

      {/* トグル状態をリセットするボタン */}
      <button onClick={() => setIsVisible(false)}>リセット</button>
    </div>
  );
}


export default ToggleApp;