import React from 'react';

// PURE REACT
export default Text = props => {

  return (
    <div>
      { props.gifs.map((val, i) => <img key={ i } src={ val } />) }
      <button onClick={ props.del }>-</button>
      <input />
      <button onClick={ props.submitChar }>submit</button>
    </div>
    )
};
