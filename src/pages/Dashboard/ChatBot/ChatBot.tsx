import React, { useState, useEffect, useRef } from "react";

interface Message {
  id: number;
  user: string;
  text: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Ref to scroll to the last message
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the last message
  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      user: "You",
      text: inputValue,
    };

    setMessages([...messages, newMessage]);
    setInputValue(""); // Clear input after sending message
  };

  return (
    <div className="flex  flex-col h-[500px] w-[400px]">
      {/* Chat Header */}
      <header className="flex items-center justify-between bg-blue-600 p-4 text-white">
        <h2 className="text-lg font-semibold">Chat with Bot</h2>
        <span>Online</span>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.user === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                  message.user === "You"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                <span className="block text-sm font-medium">
                  {message.user}
                </span>
                <span className="block mt-1">{message.text}</span>
              </div>
            </div>
          ))}

          {/* A div to mark the last message */}
          <div ref={lastMessageRef}></div>
        </div>
      </div>

      {/* Chat Input */}
      <footer
        onSubmit={(e) => e.preventDefault()}
        className="flex p-4 bg-white border-t"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-500"
        >
          Send
        </button>
      </footer>
    </div>
  );
};

export default ChatBot;
