import { Send, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const AIChat = ({ initialMessage, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const bottomRef = useRef(null);

  //  AUTO SEND FIRST MESSAGE
  useEffect(() => {
    if (initialMessage) {
      sendMessage(initialMessage);
    }
  }, [initialMessage]);

  //  AUTO SCROLL
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (msg = input) => {
    if (!msg.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: msg },
    ]);

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "AI response for: " + msg },
      ]);
    }, 600);
  };

  return (
    <div className="h-full flex flex-col">

      {/*  TOP BAR */}
      <div className="flex items-center px-6 py-4">
        <ArrowLeft
          onClick={onBack}
          className="text-gray-400 cursor-pointer hover:text-white"
        />
        <h2 className="ml-3 text-white text-sm font-semibold">
          AI Chat
        </h2>
      </div>

      {/*  CHAT AREA */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">

        <div className="max-w-3xl mx-auto space-y-6">

          {messages.length === 0 && (
            <div className="text-center text-gray-400 mt-20">
              Ask anything 
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] p-4 rounded-xl text-sm ${
                  msg.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-[#1e293b] text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          <div ref={bottomRef}></div>

        </div>
      </div>

      {/*  INPUT BAR */}
      <div className="pb-6 px-4 sm:px-6">

        <div className="max-w-3xl mx-auto flex items-center bg-[#1e293b] rounded-full px-4 py-3 border border-white/10">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Message AI..."
            className="flex-1 bg-transparent outline-none text-white px-2"
          />

          <Send
            onClick={() => sendMessage()}
            className="text-blue-400 cursor-pointer"
          />
        </div>

      </div>

    </div>
  );
};

export default AIChat;