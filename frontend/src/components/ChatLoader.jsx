import { MessageCircleIcon } from "lucide-react";

const ChatLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
      {/* Animated Icon */}
      <div className="relative">
        <MessageCircleIcon className="w-16 h-16 text-primary animate-pulse" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-bounce"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold animate-pulse">
          Loading conversations...
        </h3>
        <p className="text-sm opacity-70">Preparing your chat experience</p>
      </div>

      {/* Animated Dots */}
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
        <div
          className="w-3 h-3 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-3 h-3 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>

      {/* Progress Bar */}
      <div className="w-64 bg-base-300 rounded-full h-2">
        <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ChatLoader;
