import { Link } from "react-router";
import {
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  VideoIcon,
} from "lucide-react";
import { capitialize } from "../lib/utils";

export const getLanguageFlag = (language) => {
  const flags = {
    english: "🇺🇸",
    spanish: "🇪🇸",
    french: "🇫🇷",
    german: "🇩🇪",
    italian: "🇮🇹",
    portuguese: "🇵🇹",
    russian: "🇷🇺",
    japanese: "🇯🇵",
    korean: "🇰🇷",
    chinese: "🇨🇳",
    arabic: "🇸🇦",
    hindi: "🇮🇳",
    turkish: "🇹🇷",
    dutch: "🇳🇱",
    swedish: "🇸🇪",
    norwegian: "🇳🇴",
    danish: "🇩🇰",
    polish: "🇵🇱",
    czech: "🇨🇿",
    hungarian: "🇭🇺",
    finnish: "🇫🇮",
    greek: "🇬🇷",
    hebrew: "🇮🇱",
    thai: "🇹🇭",
    vietnamese: "🇻🇳",
    indonesian: "🇮🇩",
    malay: "🇲🇾",
    filipino: "🇵🇭",
    urdu: "🇵🇰",
    bengali: "🇧🇩",
    persian: "🇮🇷",
    ukrainian: "🇺🇦",
  };

  return flags[language?.toLowerCase()] || "🌍";
};

const FriendCard = ({ friend }) => {
  return (
    <div className="card bg-base-200 hover:bg-base-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
      <div className="card-body p-5 space-y-4">
        {/* Profile Section with Animation */}
        <div className="flex items-center gap-3">
          <div className="avatar relative group">
            <div className="w-16 h-16 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
              <img
                src={friend.profilePic}
                alt={friend.fullName}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            {/* Online Status Indicator */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-base-200 animate-pulse"></div>
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
              {friend.fullName}
            </h3>
            {friend.location && (
              <div className="flex items-center text-xs opacity-70 mt-1 group-hover:opacity-100 transition-opacity duration-300">
                <MapPinIcon className="size-3 mr-1" />
                {friend.location}
              </div>
            )}
          </div>
        </div>

        {/* Hobbies with Enhanced Styling */}
        <div className="flex flex-wrap gap-1.5">
          {friend.hobbies?.map((hobby) => (
            <span className="badge badge-secondary badge-sm transform hover:scale-110 transition-transform duration-200">
              {hobby}
            </span>
          ))}
          {friend.interests?.map((interest) => (
            <span className="badge badge-outline badge-sm transform hover:scale-110 transition-transform duration-200">
              {interest}
            </span>
          ))}
        </div>

        {/* Bio with Fade Effect */}
        {friend.bio && (
          <p className="text-sm opacity-70 group-hover:opacity-90 transition-opacity duration-300 line-clamp-2">
            {friend.bio}
          </p>
        )}

        {/* Action Buttons with Hover Effects */}
        <div className="flex gap-2 pt-2">
          <Link
            to={`/chat/${friend._id}`}
            className="btn btn-primary btn-sm flex-1 group/btn"
          >
            <MessageCircleIcon className="size-4 mr-1 group-hover/btn:animate-bounce" />
            Chat
          </Link>

          <Link
            to={`/call/${friend._id}`}
            className="btn btn-secondary btn-sm flex-1 group/btn"
          >
            <VideoIcon className="size-4 mr-1 group-hover/btn:animate-pulse" />
            Video
          </Link>
        </div>

        {/* Last Active Time */}
        <div className="text-xs opacity-50 text-center">
          Last active: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
