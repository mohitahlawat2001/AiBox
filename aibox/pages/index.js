import React, { useState } from 'react';
// import styles from '../styles/Home.module.css'; // Ensure the path to your CSS file is correct

export default function Home() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showQuickResponses, setShowQuickResponses] = useState(true);

    const handleInputChange = (e) => {
      setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        sendMessage(input);
        e.preventDefault();
    }
};

  const quickResponse = (text) => {
      sendMessage(text);
      setShowQuickResponses(false);
  };

  const sendMessage = async (message) => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    setShowQuickResponses(false);

    const newMessage = { id: Date.now(), text: trimmedMessage, sender: 'user' };
    setMessages(messages => [...messages, newMessage]);
    setInput('');

    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmedMessage }),
    });
    const { reply } = await response.json();
    const formattedReply = formatText(reply);

    setMessages(messages => [...messages, { id: Date.now() + 1, text: formattedReply, sender: 'bot' }]);
};

const formatText = (text) => {
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formattedText = formattedText.split('\n').map(line => {
        if (line.trim().startsWith('* ')) {
            return `<li>${line.trim().substring(2)}</li>`;
        }
        return line;
    }).join('\n');

    if (formattedText.includes('<li>')) {
        formattedText = `<ul>${formattedText}</ul>`;
    }

    return formattedText;
};
const renderMessage = (msg) => {
  if (msg.sender === 'bot') {
      return <p key={msg.id} className='text-left text-blue-500 m-5 p-5 rounded bg-white shadow-sm' dangerouslySetInnerHTML={{ __html: msg.text }}></p>;
  } else {
      return <p key={msg.id} className='text-right text-green-500 m-5 p-5 rounded bg-green-200 shadow-sm '>{msg.text}</p>;
  }
};

    return (
        <div className='w-40vw mx-auto p-20 shadow-md rounded-md bg-slate-300'>
            <div className='border border-blue-500 rounded p-4 h-70v overflow-y-auto mb-4 shadow-md '>
                {messages.map(msg => renderMessage(msg))}
                {showQuickResponses && (
                    <div className='flex justify-between mt-4 p-5 m-2 rounded-md'>
                        <button className='px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer transition duration-300 hover:bg-blue-600 ' onClick={() => quickResponse('Hello!')}>Hello</button>
                        <button className='px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer transition duration-300 hover:bg-blue-600' onClick={() => quickResponse('Give a quick tip for a developer')}>Quick Tip</button>
                        <button className='px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer transition duration-300 hover:bg-blue-600' onClick={() => quickResponse('Tell me a joke!')}>Tell a Joke</button>
                    </div>
                )}
            </div>
            <div className='flex justify-between mt-4 '>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className='flex-grow mr-4 p-4 border border-gray-300 rounded'
                />
                <button onClick={() => sendMessage(input)} className='bg-blue-500 text-white border-none cursor-pointer rounded-2xl px-4 animate-pulse'>Send</button>
            </div>
        </div>
    );
}