import React from 'react';

// PURE REACT
export default Text = (props) => {
  return (
    <div>
      <p>{props.display}</p>
      <button onClick={props.del}>-</button>
      <input />
      <button onClick={props.submitChar}>submit</button>
    </div>
    )
};

