import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p>Mensaje del padre: {props.message}</p>
    </div>
  );
}

export default ChildComponent;