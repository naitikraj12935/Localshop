// App.js
import React from 'react';
import Chatbot from 'react-chatbot-kit';
// Import Tailwind CSS styles
import config from './bot/config.js';
import MessageParser from './bot/MessageParser.jsx';
import ActionProvider from './bot/ActionProvider.jsx';
import 'react-chatbot-kit/build/main.css'
import './bot/Bot.css';







const App2 = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-gray-100">
      
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
       
    </div>
  );
};

export default App2;
