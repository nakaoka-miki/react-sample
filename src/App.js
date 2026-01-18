import TextInput from "./component/Textinput"
import Counter from "./component/Counter"
import { useState ,useEffect} from "react";


function App(){
  const [name,setName]=useState('')
  const [id,setId]=useState('nakaoka-miki')
  const ids=['nakaoka-miki', 'aws','google']
  const getRandomId=()=>{
    const _id=ids[Math.floor(Math.random()*ids.length)]
    setId(_id)
  }

  useEffect(()=>{
  fetch(` https://api.github.com/users/${id}` )
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setName(data.name)
    })
    .catch(error=>{
      console.log(error)
    })
  },[id])

  return (
    <div>
    <TextInput/>
    <Counter/>
    <p>
      {id}のGitHub上の名前は{name}です
    </p>
    <button onClick={getRandomId}>ID変更</button>
      </div>
  )
 
}

export default App;
