import {  useState } from "react";
import React from 'react';

function Input() {
  
  let localData = localStorage.getItem('names');
  const [names, setNames] = useState([])
  
  const submit = () => {

    let result = {
      name: document.getElementById('name').value,
      last_name: document.getElementById('last-name').value
    }
    names.push(result)
    localStorage.setItem('names', JSON.stringify(names))
     localData = localStorage.getItem('names');
     setNames(JSON.parse(localData));

    document.getElementById('name').value = '';
    document.getElementById('last-name').value = ''
    // console.log('names:', names, 'local data;', localData)
    console.log('parse:', JSON.parse(localData))
    return;
  }


  return (
    <div>
      <h1>
        This is a local storage practice app.
      </h1>
      <h3>
        please enter your name so we can storage it for safe keeping
      </h3>
      <input type='text' name='name' placeholder='name' id='name'></input>
      <input type='text' name='lastname' placeholder='last-name' id='last-name'></input>
      <input type='submit' onClick={submit}></input>

      {JSON.parse(localData).map((value, inx) => {
        return (
          <div key={inx} className='nameDiv'>
            the name is : {value.name} - {value.last_name}
          </div>
        )

      })}

    </div>
  )
}

export default Input;