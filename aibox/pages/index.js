import React, { useEffect, useState } from "react";
import bots from "../src/botData";

export default function Home({ darkMode }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showQuickResponses, setShowQuickResponses] = useState(true);
  const [quickResponses, setQuickResponses] = useState([]);

  const [activeBot, setActiveBot] = useState(bots[0]);
  const handleBotClick = (bot) => {
    setActiveBot(bot);
  };

  function getRandomResponses(numResponses, quickResponses) {
    let shuffled = quickResponses?.responses.sort(() => 0.5 - Math.random());
    return shuffled?.slice(0, numResponses);
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const refreshMessages = () => {
    setMessages([]);
    setShowQuickResponses(true);
  };

  const saveMessagesToFile = () => {
    const formattedMessages = messages
      .map((message) => `${message.sender}: ${message.text}`)
      .join("\n");
    const blob = new Blob([formattedMessages], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "messages.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
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

    const newMessage = { id: Date.now(), text: trimmedMessage, sender: "user" };
    setMessages((messages) => [...messages, newMessage]);
    setInput("");

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: trimmedMessage }),
    });
    const { reply } = await response.json();
    const formattedReply = formatText(reply);

    setMessages((messages) => [
      ...messages,
      { id: Date.now() + 1, text: formattedReply, sender: "bot" },
    ]);
  };

  const formatText = (text) => {
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    formattedText = formattedText
      .split("\n")
      .map((line) => {
        if (line.trim().startsWith("* ")) {
          return `<li>${line.trim().substring(2)}</li>`;
        }
        return line;
      })
      .join("\n");

    if (formattedText.includes("<li>")) {
      formattedText = `<ul>${formattedText}</ul>`;
    }

    return formattedText;
  };
  const renderMessage = (msg) => {
    if (msg.sender === "bot") {
      return (
        <div className="flex justify-between">
          <p
            key={msg.id}
            className="text-left text-blue-500 m-5 p-5 rounded bg-white shadow-sm w-1/2 rounded-e-3xl  "
            dangerouslySetInnerHTML={{ __html: msg.text }}
          ></p>
          <div></div> {/* Empty div to push the message to the left */}
        </div>
      );
    } else {
      return (
        <div className="flex justify-between">
          <div></div> {/* Empty div to push the message to the right */}
          <p
            key={msg.id}
            className="text-right text-green-500 m-5 p-5 rounded bg-green-200 shadow-sm w-auto rounded-s-3xl "
          >
            {msg.text}
          </p>
        </div>
      );
    }
  };

  useEffect(() => {

    setQuickResponses(selectedBot());
  },[activeBot, messages])

  const selectedBot = ()=>{
    return getRandomResponses(4, activeBot);
  }

  return (
    <div
      className={`w-40vw mx-auto p-20 shadow-md rounded-md ${
        darkMode ? "bg-slate-500" : " bg-slate-300"
      }`}
    >
      {bots.map((bot, index) => (
        <button
          key={index}
          className={`p-2 m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
            activeBot === bot ? "bg-green-700" : ""
          }`}
          onClick={() => handleBotClick(bot)}
        >
          {bot.name}
        </button>
      ))}
      <div
        className={`border ${
          darkMode ? "border-blue-200 bg-slate-400" : "border-blue-500"
        } rounded p-4 h-70v overflow-y-auto mb-4 shadow-md `}
      >
        {messages.map((msg) => renderMessage(msg))}
        {showQuickResponses && (
          <div className="flex justify-between mt-4 p-5 m-2 rounded-md">
            {quickResponses.map((response, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-start p-4 m-2 h-48 w-48 bg-slate-200 shadow-lg rounded-lg ${
                  darkMode ? "bg-blue-700" : "bg-blue-500"
                } hover:animate-pulse`}
                onClick={() => quickResponse(response.response)}
              >
                <div className="font-bold text-xl mb-2 text-black">
                  {response.title}
                </div>
                <p className="text-gray-700 text-base">{response.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between mt-4 ">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-grow mr-4 p-4 border text-black border-gray-300 rounded bg-slate-200 "
        />
        <button
          onClick={() => sendMessage(input)}
          className={`bg-blue-500 text-white border-none cursor-pointer rounded-2xl px-4 mx-1 animate-pulse ${
            darkMode ? "bg-blue-700" : "bg-blue-500"
          }`}
        >
          Send
        </button>
        <button
          onClick={saveMessagesToFile}
          className={`bg-blue-500 text-white border-none cursor-pointer rounded-2xl px-4 mx-1 animate-pulse ${
            darkMode ? "bg-blue-700" : "bg-blue-500"
          }`}
        >
          Save
        </button>
        <button
          onClick={refreshMessages}
          className={`bg-blue-500 text-white border-none cursor-pointer rounded-2xl px-4 mx-1 animate-pulse ${
            darkMode ? "bg-blue-700" : "bg-blue-500"
          }`}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
