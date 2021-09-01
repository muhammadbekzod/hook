import React, {useState, useEffect} from 'react';

const App =() =>{
  const [count, setCount] = useState(0);
  const [name, setName ] = useState('');
  const [data, setData] = useState([]);

  const onAdd = () =>{
    setCount(count + 1);
  };
  const onSubstract =() =>{
    setCount(count - 1 );
  };
  const onChange = (e) => {
    setName(e.target.value);
    };
  // useEffect(() => {}, [count, name]);

  useEffect(() => {
    setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }, 3000)
  },[]);
  if (data.length <= 0 ) return <h1>Loading...</h1>
    return (
      <div>
        {data?.map((value) => {
          return <h1 key={value.id}>{value.title}</h1>;
        })}
        
        {/* <input type='text' onChange ={onChange} />
        <button onClick ={onAdd}>+</button>
        <button onClick ={onSubstract}>-</button> */}
      </div>
    );
};
export default App;