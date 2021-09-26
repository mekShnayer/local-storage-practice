import React from "react";

function Title() {
  return (
    <div>
      <h1>
        This is a local storage practice app.
      </h1>
      <h3>
        please enter your name so we can storage it for safe keeping
      </h3>
      <input type='text' name='name' placeholder='name' id='name'></input>
      <br></br>
      <input type='text' name='lastname' placeholder='last-name' id='last-name'></input>
      <br></br>
    </div>

  )
}
export default Title;