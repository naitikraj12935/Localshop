import React from 'react';

const StartBtn = (props) => {
  console.log('Props in StartBtn:', props);

  const handleClick = () => {
    if (typeof props.actions.initialAction === 'function') {
      props.actions.initialAction();
    } else {
      console.error('initialAction is not a function:', props.actions.initialAction);
    }
  };

  return (
    <div>
      <button className="bg-blue-500 text-white rounded-lg p-2 lg:w-1/2" onClick={handleClick}>Start Btn</button>
    </div>
  );
};

export default StartBtn;
