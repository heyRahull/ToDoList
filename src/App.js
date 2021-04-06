import React,{ useState } from 'react'
import ToDoLists from './ToDoLists'

const App = () =>{
  const[inputList, setInputList] = useState();
  const[items,setItems]=useState([]);


const handleChange = (event) =>{
setInputList(event.target.value);
}

const handleClick = () =>{
setItems((oldItems)=>{
return [...oldItems,inputList];
});
setInputList('');
}

const deleteItems = (id) =>{
  console.log("Delete button clicked")

  setItems((olditems)=>{
    return olditems.filter((arrElem,index)=>{
      return index!==id;
    })
  })
}

return(
  <>
  <div className="main_div">
    <div className="center_div">
      <br/>
      <h1>To Do List</h1>
      <br/>
      <input type="text" placeholder="Add Items" value={inputList} onChange={handleChange}/>
      <button onClick={handleClick}>+</button>

      <ol>
        {
        items.map( (itemval, index) => {
          return <ToDoLists text={itemval} onSelect={deleteItems} key={index} id={index} />
        })
        }
      </ol>
    </div>
  </div>
  </>
)
}

export default App