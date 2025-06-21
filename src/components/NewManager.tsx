import React, { useState, useCallback } from 'react';

 

const NewManagerComponent: React.FC = () => {

const [click, setClicked] = useState(0);
const [count, setCount] = useState(0);

const increment = useCallback(() =>  {
  setCount(x=> x +1);
},[]);

return (
    <div>
        <div className="manager-name">
          <button onClick={() => setClicked(click+1) }>
            useState Click Me {click} 
          </button>
          <button onClick={increment}>
           useCallback Increment  Count: {count}
          </button>

          {/* <button onClick={() => alert('This is a new manager component!');  ;}>Click Me {click} </button> */}
        </div>
    </div>
  )
}

export default NewManagerComponent
