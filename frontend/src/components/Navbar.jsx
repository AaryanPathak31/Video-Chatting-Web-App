import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { LogOutIcon, ShipWheelIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";
import NotificationBadge from "./NotificationBadge";
import { useQuery } from "@tanstack/react-query";
import { getFriendRequests } from "../lib/api";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();

  // Fetch friend requests for notification count
  const { data: friendRequests = [] } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end w-full">
          {/* LOGO - ONLY IN THE CHAT PAGE */}
          {isChatPage && (
            <div className="pl-5 animate-fade-in">
              <Link to="/" className="flex items-center gap-2.5 group">
                <ShipWheelIcon className="size-9 text-primary group-hover:animate-spin transition-all duration-500" />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider group-hover:tracking-widest transition-all duration-300">
                  Vibin
                </span>
              </Link>
            </div>
          )}

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <NotificationBadge count={friendRequests.length} />
          </div>

          {/* Theme Selector with Animation */}
          <div className="transform hover:scale-110 transition-transform duration-200">
            <ThemeSelector />
          </div>

          {/* User Avatar with Hover Effect */}
          <div className="avatar group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="w-9 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
              <img
                src={authUser?.profilePic}
                alt="User Avatar"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Online Status */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-base-200 animate-pulse"></div>
          </div>

          {/* Logout button with Animation */}
          <button
            className="btn btn-ghost btn-circle group transform hover:scale-110 transition-all duration-300"
            onClick={logoutMutation}
          >
            <LogOutIcon className="h-6 w-6 text-base-content opacity-70 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300" />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
