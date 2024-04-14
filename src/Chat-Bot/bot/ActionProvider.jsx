import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const initialAction = () => {
    const message = createChatBotMessage('Just type in your Name to begin');
    updateState(message,"options");
  };
  const SelectOptions = () => {
    const message = createChatBotMessage('Select The category of problem that you are facing',{
      widget:"Problem_Options"}
      
      
      
    );
    updateState(message);
  };
  const PaymentIssue=()=>{
    const message=createChatBotMessage('ok you have problem regarding Payment');
    updateState(message,"problem")
  }
  const RefundIssue=()=>{
    const message=createChatBotMessage('ok you have problem regarding Refund');
    updateState(message,"problem")
  }
  const ProductIssue=()=>{
    const message=createChatBotMessage('ok you have problem regarding Product');
    updateState(message,"problem")
  }
  const DeliveryIssue=()=>{
    const message=createChatBotMessage('ok you have problem regarding Delivery');
    updateState(message,"problem")
  }
  
  const afterNameMessage = () => {
    const message = createChatBotMessage("Tell Me  problem that you are facing")
    updateState(message, "issue")
}
const goodlength = () => {
  const message = createChatBotMessage("ok we are processing your problem our team will reach you soon and send same issue on naitikraj12935@gmail.com with screen shot of that issue")
  updateState(message, "issue-ok")
}
const badlength = () => {
  const message = createChatBotMessage("describe your problem in at least 200 characters so can i understand")
  updateState(message, "issue")
}

  const updateState = (message,checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterNameMessage,
            SelectOptions,
            goodlength,
            badlength,
            PaymentIssue,
            ProductIssue,
            RefundIssue,
            DeliveryIssue // Make sure to include the function in the actions object
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

