下記のyoutubeまとめ<br>
URL：https://youtube.com/playlist?list=PLX8Rsrpnn3IWPoM7-1YPDksRRkamRY25k&si=v9HVlkWOMzuBM2sz

●Reactとは<br>
UIライブラリ<br>
コンポーネントという概念が特徴的（見た目と機能を持つUI部品）<br>
コンポーネントを組み合わせて画面を作成していく<br>

●JSXとは<br>
JavaScriptの拡張言語<br>
HTMEライクの記述＋JavaScriptのような構文が使える<br>
JSXは最終的にReact要素を生成する<br>

●JSXの基本文法<br>
・Reactライブラリをimport<br>
・return文の中がJSX構文<br>
・キャメルケースで記述<br>
・{}内で変数を扱える<br>
・閉じタグが必要<br>
・JSXは必ず階層構造、最上位コンポーネントは並列できない<br>
　→並列で囲む必要がある場合は「React.Fragment（省略可）」を使用する<br>

例）
import React from 'react';<br>
const Thumbnail = () =>{<br>
    const caption = '見本'<br>
    const imagePath = '/img/mihon.png'<br>

    return (
        <div>
         <p>{caption}</p>
         <img src={imagePath} alt={'例'} />
        </div>
    )
}<br>
export defalt Thumbnail<br>


●コンポーネント基本使用法<br>
・ファイル名は大文字<br>
・子コンポーネントでexport<br>
・親コンポーネントでimport<br>
・propsでデータを受け渡す<br>
・同じコンポーネントはいくつでも呼び出しできる<br>
　　
●propsについて<br>
・子コンポーネントの引数にpropsを指定<br>
・親から子にデータを渡す<br>
・propsのデータはz{}に記述<br>
・渡せるデータはなんでも可（文字列、数値、真偽値、配列、オブジェクト、日時、変数など）<br>
・文字列は{}無しでもOK<br>

●stateについて
・React コンポーネントで管理される状態<br>
・state が更新されると、コンポーネントは再レンダリング<br>

●propsとstateの違い<br>
・propsは引数のようなコンポーネントに渡される値<br>
・stateはコンポーネントの内部の宣言・制御される値<br>
