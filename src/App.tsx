import React from 'react';
import logo from './logo.svg';
import './App.css';

// JSONの型推論
import Data from "./data.json"
import TestComponent from './TestComponent';
type USERS = typeof Data;

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

//Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
}

// Literal Types

let company: "Facebook" | "Google" | "Amazon"
company = "Amazon"
// company = "Apple" エラーになる

let memory: 256 | 512;
memory = 256;

//typeof (msgの型をmsg2継承)
let msg: string = "Hi";
let msg2: typeof msg;
    // msg2 = 2; エラーになる
let animal = { cat: "small cat"};
let newAnimal: typeof animal = { cat: "big cat" };

//keyof
type KEYS = {
  primary: string;
  secondary: string;
};

let key: keyof KEYS
key = "primary";

//typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball"
}

let keySports: keyof typeof SPORTS;
keySports = "soccer"

//enum(列挙型)連番を作ってくれる。メンテナンス性の向上
enum OS {
  Widows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id:1,
  OSType: OS.Widows,
}
const PC2: PC = {
  id:2,
  OSType: OS.Mac
}

//型の互換性
const comp1 = "test";
  // より抽象度の高いstringという型に対して、具体的な"test"という文字列を入れることはできる
  let comp2: string = comp1;
  // その反対はできない
  let comp3: string = "test";
  let comp4: "test" = comp3;

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};
  // データ型が違うので代入できない
  funcComp1 = funcComp2

//Generics ジェネリックス propsに型を指定する必要がある
interface GEN<T>{
  item: T;
}
const gen0: GEN<string> = {item: "hello"};
const gen1: GEN = { item: "hello" };//エラーになる
const gen2: GEN<number> = {item: 2};

interface GEN1<T=string>{
  item: T;
}
const gen3: GEN1 = { item: "hello" };

interface GEN2<T extends string | number>{
  item: T;
}
const gen4: GEN2<string> = { item: "hello" };
const gen5: GEN2<boolean> = { item: true };//制約を満たしていたいのでエラーになる

function funcGEN<T>(props: T) {
  return {item: props}
} 
const gen6 = funcGEN<string>("test");
const gen7 = funcGEN<string | null>(null);

function funcGen1<T extends string | null><(props: T) {
  return {value: props};
}
const gen8 = funcGen1("hello");
const gen9 =funcGen1(123);

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return {value: props.price}
}
const gen10 = funcGen3({price: 1});

// アロー関数で書く
const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
}

// React Hooks Props型
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App />
      </header>
    </div>
  );
}

export default App;
