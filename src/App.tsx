import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = "hello";

let username: string ="Hello";
let dummyNum: number = 2;
let bool: boolean = true;

// 配列での型定義
let array1 = [true, false, true];
let array2 = [0, 1, "hello"];

// オブジェクトの型定義
interface NAME {
  first: string;
  last: string | null;
}
let nameObj: NAME = {first:"Yamada", last:"Taro"};

// 関数の型定義

const func1 = (x: number, y: number): number => {
  return x + y;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
