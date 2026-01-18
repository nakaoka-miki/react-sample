import Article from "./components/Article";

function App(){
  
return(
  <div>
  <Article
    title={'新・日本一わかりやすいReact入門１'}
    content={'今日のテーマはデータの受け渡しについて'}
  />
  <Article
    title={'新・日本一わかりやすいReact入門２'}
    content={'今日のテーマはcomponentの再利用について'}
  />
  <Article
    title={'新・日本一わかりやすいReact入門３'}
    content={'今日のテーマはusestateについて'}
  />
  <Article
    title={'新・日本一わかりやすいReact入門４'}
    content={'今日のテーマはおさらいです'}
  />
</div>
)}

 
export default App;
