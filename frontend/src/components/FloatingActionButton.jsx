import { useState } from "react";
import { Link } from "react-router";
import {
  PlusIcon,
  MessageCircleIcon,
  VideoIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const actions = [
    {
      icon: <MessageCircleIcon className="w-5 h-5" />,
      label: "New Chat",
      href: "/",
      color: "btn-primary",
    },
    {
      icon: <VideoIcon className="w-5 h-5" />,
      label: "Video Call",
      href: "/",
      color: "btn-secondary",
    },
    {
      icon: <UsersIcon className="w-5 h-5" />,
      label: "Find Friends",
      href: "/",
      color: "btn-accent",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      <div
        className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.href}
            className={`btn btn-circle ${action.color} shadow-lg transform hover:scale-110 transition-all duration-200`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {action.icon}
          </Link>
        ))}
      </div>

      {/* Main FAB Button */}
      <button
        onClick={toggleMenu}
        className={`btn btn-circle btn-primary shadow-lg transform hover:scale-110 transition-all duration-300 ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
      >
        {isOpen ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <PlusIcon className="w-6 h-6" />
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-base-300 text-base-content px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Quick Actions
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
