下記のyoutubeまとめ
URL：https://youtube.com/playlist?list=PLX8Rsrpnn3IWPoM7-1YPDksRRkamRY25k&si=v9HVlkWOMzuBM2sz

●Reactとは
UIライブラリ
コンポーネントという概念が特徴的（見た目と機能を持つUI部品）
コンポーネントを組み合わせて画面を作成していく

●JSXとは
JavaScriptの拡張言語
HTMEライクの記述＋JavaScriptのような構文が使える
JSXは最終的にReact要素を生成する

●JSXの基本文法
・Reactライブラリをimport
・return文の中がJSX構文
・キャメルケースで記述
・{}内で変数を扱える
・閉じタグが必要
・JSXは必ず階層構造、最上位コンポーネントは並列できない
　→並列で囲む必要がある場合は「React.Fragment（省略可）」を使用する

例）
import React from 'react';
const Thumbnail = () =>{
    const caption = '見本'
    const imagePath = '/img/mihon.png'

    return (
        <div>
         <p>{caption}</p>
         <img src={imagePath} alt={'例'} />
        </div>
    )
}
export defalt Thumbnail


●コンポーネント基本使用法
・ファイル名は大文字
・子コンポーネントでexport
・親コンポーネントでimport
・propsでデータを受け渡す
・同じコンポーネントはいくつでも呼び出しできる
　　
●propsについて
・子コンポーネントの引数にpropsを指定
・親から子にデータを渡す
・propsのデータはz{}に記述
・渡せるデータはなんでも可（文字列、数値、真偽値、配列、オブジェクト、日時、変数など）
・文字列は{}無しでもOK

●stateについて
・React コンポーネントで管理される状態
・state が更新されると、コンポーネントは再レンダリング

●propsとstateの違い
・propsは引数のようなコンポーネントに渡される値
・stateはコンポーネントの内部の宣言・制御される値
