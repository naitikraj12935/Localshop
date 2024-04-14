import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import StartBtn from './StartBtn';
import ProblemOptions from './ProblemOptions';
const config = {
  initialMessages: [createChatBotMessage(`Welcome to Local-shop ..`, { widget: 'startBtn' })],
  customComponents: {
    botAvatar: (props) => <Avatar />,
  },
  widgets:[
    {
      widgetName:"startBtn",
      widgetFunc:(props)=><StartBtn {...props}/>
    },
    {
      widgetName:"Problem_Options",
      widgetFunc:(props)=><ProblemOptions {...props}/>
    },
    
  ]
};

export default config;