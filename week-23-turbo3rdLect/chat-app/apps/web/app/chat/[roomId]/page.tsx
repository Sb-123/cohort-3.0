"use client";
import { useState } from "react";
import Input from "@repo/ui/text-input";
import { IoSend } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: Date;
}

export default function ChatRoom({ params }: { params: { roomId: string } }) {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Welcome to the chat!", sender: "System", timestamp: new Date() }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      text: newMessage,
      sender: "You",
      timestamp: new Date()
    }]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-[#efeae2]">
      {/* Header */}
      <div className="bg-[#008069] text-white px-4 py-3 flex items-center gap-4 shadow-sm">
        <button 
          onClick={() => router.back()}
          className="hover:bg-[#ffffff1a] p-2 rounded-full"
        >
          <IoArrowBack size={20} />
        </button>
        <div>
          <h1 className="font-semibold">Room: {params.roomId}</h1>
          <p className="text-xs opacity-80">2 participants</p>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-2"
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFISURBVDiNrdU/S1xBFMbx3y4rIkEEQYQUgRDEQlKIjVjYWFoLFoKVX8BCrEQQP4ONoI2VEEhpIYiCYGFhYWMhQkQQhCC6oo0/dr0W7sJl2fWuG/PAFGfmPM9758yZqe7s7PwNy7iHh7iOQ3zGW3wrYjX/gHqO4zU2cQNX0Y1LOI8ZbGMezbxwHWMYzAVraOIbpjGJD/iIfvRiCI+wggk8xY8UXsAQpnJiDV/wGqsYxk6y9RVxHvdxhLmkPYvreIJ9jGK3XUE1FWziY7IdJ3E/RnAL4/ieCq6kTOvYQg0X8QxPk/YnvuNuyt1OtqMUXMUgXqKRbF/xJ9l6UnwjFTxI51WspeS3eIc/yX6Y4vdSwZ/YS0GrSXyBzxjAXBJXU/xuOv+/4EI6L+NF0u6m5nRhO4nHqWBROI+eXLCFk7bYf2+CfNYrYGJ3AAAAAElFTkSuQmCC")`,
          backgroundRepeat: 'repeat'
        }}
      >
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`max-w-[70%] rounded-lg p-2 ${
                message.sender === "You" 
                  ? "bg-[#d9fdd3] rounded-tr-none" 
                  : "bg-white rounded-tl-none"
              }`}
            >
              <p className="text-[#111b21]">{message.text}</p>
              <div className="flex justify-end items-center gap-1">
                <span className="text-[11px] text-[#667781]">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
                {message.sender === "You" && (
                  <span className="text-[#53bdeb]">✓✓</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-[#f0f2f5] flex items-center gap-2">
        <div className="flex-1 bg-white rounded-lg">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
            className="w-full border-none focus:ring-0"
          />
        </div>
        <button
          onClick={sendMessage}
          className="p-3 bg-[#008069] text-white rounded-full hover:bg-[#006e5a] transition-colors"
          disabled={!newMessage.trim()}
        >
          <IoSend size={20} />
        </button>
      </div>
    </div>
  );
}
