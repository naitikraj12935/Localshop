import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if(children.props.state.checker==="options")
    {
      actions.SelectOptions();
    }
    if(children.props.state.checker==="problem")
    {
      actions.afterNameMessage();
    }
    if(children.props.state.checker==="issue" && message.length>=200)
    {
      actions.goodlength();
    }
    if(children.props.state.checker==="issue" && message.length<200)
    {
      actions.badlength();
    }
    
    
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions ,
        });
      })}
    </div>
  );
};

export default MessageParser;
