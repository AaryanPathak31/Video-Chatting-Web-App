import { BellIcon } from "lucide-react";
import { Link } from "react-router";

const NotificationBadge = ({ count = 0 }) => {
  return (
    <Link to="/notifications" className="relative group">
      <button className="btn btn-ghost btn-circle relative">
        <BellIcon className="h-6 w-6 text-base-content opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-bounce" />

        {/* Notification Badge */}
        {count > 0 && (
          <div className="absolute -top-1 -right-1 bg-error text-error-content rounded-full min-w-[20px] h-5 flex items-center justify-center text-xs font-bold animate-pulse">
            {count > 99 ? "99+" : count}
          </div>
        )}

        {/* Ripple Effect on Hover */}
        <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
      </button>
    </Link>
  );
};

export default NotificationBadge;
