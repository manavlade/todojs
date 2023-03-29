import React from 'react'
import "./Listitems.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import e from 'express';
function Listitem(props) {
  const items = props.items;
  const Listitems = items.map(item => {
    return (
    <FlipMove>
    <div className='List' key={item.key}>
      <p>
        <input type="text" 
        id={item.text} 
          value ={item.text}
          onChange ={
            (e) =>{
              props.setUpdate(e.target.value, item.key)
            }
          }
        /> 
        <span>
          <FontAwesomeIcon className="faicons"
            onClick={() => { props.deleteItem(item.key) }} icon='trash'
          />
        </span>
      </p>
    </div>
    </FlipMove>
  );
  })
  return (
    <div>
      {Listitems}
     
    </div>
  )
  
}

export default Listitem