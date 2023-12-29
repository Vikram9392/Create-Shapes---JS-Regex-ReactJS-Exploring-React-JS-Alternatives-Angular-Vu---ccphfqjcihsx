import React,{useState} from 'react'
import '../styles/App.css';
const App = () => {
const[selectedFigure,setSelectedFigure]=useState('square');
 const[shapesDisplay,setShapesDisplay]=useState(['square','circle']);
 function appendShape(){
    setShapesDisplay((prev)=>{
        return [...prev,selectedFigure]
    })
 }
  return (
    <div id="main">
      <div id="shape-creator">
        <select name=""id=""value={selectedFigure}onChange={(e)=>setSelectedFigure(e.target.value)}>
                <option value="square">Square</option>
                <option value="circle">Circle</option>
          </select>
          <button onClick={appendShape}>Add Shape</button>

      </div>
      <div id="shapes-holder">
       {
            shapesDisplay.map((shape,index)=>{
                return(
                <div className={shape==='square'?'square':'circle'} key={index}/>
                )
          })
        }
      </div>
    </div>
  )
}


export default App;
