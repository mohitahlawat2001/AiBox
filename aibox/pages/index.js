import React, { useState } from 'react';
// import styles from '../styles/Home.module.css'; // Ensure the path to your CSS file is correct

export default function Home({ darkMode }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showQuickResponses, setShowQuickResponses] = useState(true);

    const quickResponses = [
        { title: 'Hello', text: 'Start your conversation with this', response: 'Hello!' },
        { title: 'Quick Tip', text: 'New developer you need this!', response: 'Give a quick tip for a developer' },
        { title: 'Tell a Joke', text: 'Start your day with a laugh', response: 'Tell me a joke!' },
        { title: 'Play a Game', text: 'Start a game with me', response: `## Prompt for a Science Trivia Game

        You are a trivia game host. Your goal is to ask engaging trivia questions about science for players.
        
        **Game Type:** Trivia
        
        **Category:** Science
        
        **Instructions:**
        
        1. Ask a multiple-choice trivia question about science.
        2. Provide four answer choices (A, B, C, D).
        3. Make the questions challenging but not impossible to answer. 
        4. Keep the tone playful and engaging.
        
        **Example:**
        
        **Question:** What is the name of the largest planet in our solar system?
        
        **Answer Choices:**
        
        A. Mars
        B. Jupiter
        C. Saturn
        D. Uranus
        
        **Output Format:**
        
        **Question:** [Question Text]
        
        **Answer Choices:**
        
        A. [Answer Choice A]
        B. [Answer Choice B]
        C. [Answer Choice C]
        D. [Answer Choice D]
        
        **Please provide a new science trivia question in the format above.**` },
        { title: 'Recommend a Book', text: 'Get a book recommendation', response: 'recommend me a book which no one read, full of mystery' },
        { title: 'Recommend a Movie', text: 'Get a movie recommendation', response: 'recommend me a movie which is full of action' },
        { title: 'Recommend a Song', text: 'Get a song recommendation', response: 'recommend me a song which is full of energy' },
        { title: 'Recommend an Anime', text: 'Get an Anime recommendation', response: 'recommend me an anime with high rating' },
        { title: 'Tell a Story', text: 'Get a story original for you', response: 'Tell me a story' },
        {
    title: `Unleash Your Creativity`,
    text: `Give me a creative writing prompt`,
    response: `Here's a writing prompt to spark your imagination: You wake up in a world where everyone's dreams become reality. What adventure awaits?`
  },
  {
    title: `Brainteaser Time!`,
    text: `Challenge me with a riddle`,
    response: `I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?" (Answer: A map)`
  },
  {
    title: `Would You Rather?`,
    text: `Play a game of Would You Rather`,
    response: `Would you rather be able to fly or become invisible?`
  },
  {
    title: `Fact or Fiction?`,
    text: `Tell me something surprising (true or false)`,
    response: `Did you know that the population of the Earth is roughly the same as the number of stars in our galaxy (the Milky Way)?" (Follow up with clarification: This is actually a surprising coincidence, but not necessarily true.)`
  },
  {
    title: "Time Travel Twist",
    text: "Take me on a historical adventure",
    response: "Imagine you could travel back in time to witness a pivotal historical event. Where and when would you go, and why?"
  },
  {
    title: "Future Forecast",
    text: "Predict the future (humorously)",
    response: "In the year 2042, the most popular social media platform will be for sharing dreams (and nightmares!). What will your first post be?"
  },
  {
    title: "Quote Me On It",
    text: "Give me a motivational quote",
    response: "The journey of a thousand miles begins with a single step. - Lao Tzu"
  },
  {
    title: "DIY Challenge",
    text: "Give me a creative project idea",
    response: "Feeling crafty? Upcycle an old jar into a beautiful terrarium filled with miniature plants. It's a fun and sustainable way to add a touch of nature to your home."
  },
  {
    title: "Philosophical Pondering",
    text: "Make me think with a philosophical question",
    response: "If a tree falls in a forest and no one is around to hear it, does it make a sound?"
  },
  {
    title: "Brainstorm Buddies",
    text: "Help me brainstorm ideas (for anything!)",
    response: "What are you trying to brainstorm today? Perhaps we can come up with some creative solutions together."
  }
    ];

    function getRandomResponses(numResponses) {
        let shuffled = quickResponses.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numResponses);
    }
    
    // Get 4 random responses
    let randomResponses = getRandomResponses(4);
    

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const refreshMessages = () => {
        setMessages([]);
        setShowQuickResponses(true);
    };

    const saveMessagesToFile = () => {
        const formattedMessages = messages.map(message => `${message.sender}: ${message.text}`).join('\n');
        const blob = new Blob([formattedMessages], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'messages.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
            return (
                <div className='flex justify-between'>
                    <p key={msg.id} className='text-left text-blue-500 m-5 p-5 rounded bg-white shadow-sm w-1/2 rounded-e-3xl  ' dangerouslySetInnerHTML={{ __html: msg.text }}></p>
                    <div></div> {/* Empty div to push the message to the left */}
                </div>
            );
        } else {
            return (
                <div className='flex justify-between'>
                    <div></div> {/* Empty div to push the message to the right */}
                    <p key={msg.id} className='text-right text-green-500 m-5 p-5 rounded bg-green-200 shadow-sm w-auto rounded-s-3xl '>{msg.text}</p>
                </div>
            );
        }
    };

    return (
        <div className={`w-40vw mx-auto p-20 shadow-md rounded-md ${darkMode ? 'bg-slate-500' : ' bg-slate-300'}`}>
            <div className={`border ${darkMode ? 'border-blue-200 bg-slate-400' : 'border-blue-500'} rounded p-4 h-70v overflow-y-auto mb-4 shadow-md `}>
                {messages.map(msg => renderMessage(msg))}
                {showQuickResponses && (
                    <div className='flex justify-between mt-4 p-5 m-2 rounded-md'>
                      
                {randomResponses.map(response => (
            <div 
                className={`flex flex-col justify-center items-start p-4 m-2 h-48 w-48 bg-slate-200 shadow-lg rounded-lg ${darkMode ? 'bg-blue-700' : 'bg-blue-500'} hover:animate-pulse`} 
                onClick={() => quickResponse(response.response)}>
                <div className="font-bold text-xl mb-2 text-black">{response.title}</div>
                <p className="text-gray-700 text-base">{response.text}</p>
            </div>
            
        ))}

            </div>
                )}
            </div>

            <div className='flex justify-between mt-4 '>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className='flex-grow mr-4 p-4 border text-black border-gray-300 rounded bg-slate-200 '
                />
                <button onClick={() => sendMessage(input)} className={`bg-blue-500 text-white border-none cursor-pointer rounded-2xl px-4 mx-1 animate-pulse ${darkMode ? 'bg-blue-700' : 'bg-blue-500'}`}>Send</button>
                <button onClick={saveMessagesToFile} className={`bg-blue-500 text-white border-none cursor-pointer rounded-2xl px-4 mx-1 animate-pulse ${darkMode ? 'bg-blue-700' : 'bg-blue-500'}`}>Save</button>
                <button onClick={refreshMessages} className={`bg-blue-500 text-white border-none cursor-pointer rounded-2xl px-4 mx-1 animate-pulse ${darkMode ? 'bg-blue-700' : 'bg-blue-500'}`}>Refresh</button>
            </div>
        </div>
    );
}