import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  getOutgoingFriendReqs,
  getRecommendedUsers,
  sendFriendRequest,
} from "../lib/api";
import { Link } from "react-router";
import {
  CheckCircleIcon,
  MapPinIcon,
  UserPlusIcon,
  UsersIcon,
  SparklesIcon,
} from "lucide-react";

import { capitialize } from "../lib/utils";

import { getLanguageFlag } from "../components/FriendCard";

const HomePage = () => {
  const queryClient = useQueryClient();
  const [outgoingRequestsIds, setOutgoingRequestsIds] = useState(new Set());

  const { data: recommendedUsers = [], isLoading: loadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: getRecommendedUsers,
  });

  const { data: outgoingFriendReqs } = useQuery({
    queryKey: ["outgoingFriendReqs"],
    queryFn: getOutgoingFriendReqs,
  });

  const { mutate: sendRequestMutation, isPending } = useMutation({
    mutationFn: sendFriendRequest,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["outgoingFriendReqs"] }),
  });

  useEffect(() => {
    const outgoingIds = new Set();
    if (outgoingFriendReqs && outgoingFriendReqs.length > 0) {
      outgoingFriendReqs.forEach((req) => {
        outgoingIds.add(req.recipient._id);
      });
      setOutgoingRequestsIds(outgoingIds);
    }
  }, [outgoingFriendReqs]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
      <div className="container mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-6 h-6 text-primary animate-pulse" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Discover New Friends
              </h2>
            </div>
            <p className="opacity-70 animate-fade-in-up">
              Find new friends based on your profile!
            </p>
          </div>
          <div
            className="flex gap-2 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <Link
              to="/friends"
              className="btn btn-outline btn-sm group hover:scale-105 transition-transform duration-200"
            >
              <UsersIcon className="mr-2 size-4 group-hover:animate-bounce" />
              My Friends
            </Link>
            <Link
              to="/notifications"
              className="btn btn-outline btn-sm group hover:scale-105 transition-transform duration-200"
            >
              <UsersIcon className="mr-2 size-4 group-hover:animate-bounce" />
              Friend Requests
            </Link>
          </div>
        </div>

        {loadingUsers ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <div
                className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-secondary rounded-full animate-spin"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "1.5s",
                }}
              ></div>
            </div>
            <p className="text-lg font-semibold animate-pulse">
              Finding amazing language partners...
            </p>
          </div>
        ) : recommendedUsers.length === 0 ? (
          <div className="card bg-base-200 p-8 text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              No recommendations available
            </h3>
            <p className="text-base-content opacity-70">
              Check back later for new language partners!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedUsers.map((user, index) => {
              const hasRequestBeenSent = outgoingRequestsIds.has(user._id);

              return (
                <div
                  key={user._id}
                  className="card bg-base-200 hover:bg-base-300 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="card-body p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="avatar relative group/avatar">
                        <div className="w-20 h-20 rounded-full ring-4 ring-primary/20 group-hover/avatar:ring-primary/50 transition-all duration-500">
                          <img
                            src={user.profilePic}
                            alt={user.fullName}
                            className="w-full h-full object-cover rounded-full"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-3 border-base-200 animate-pulse"></div>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                          {user.fullName}
                        </h3>
                        {user.location && (
                          <div className="flex items-center text-sm opacity-70 mt-1 group-hover:opacity-100 transition-opacity duration-300">
                            <MapPinIcon className="size-4 mr-1" />
                            {user.location}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-secondary badge-lg transform hover:scale-110 transition-transform duration-200">
                        {getLanguageFlag(user.nativeLanguage)}
                        Native: {capitialize(user.nativeLanguage)}
                      </span>
                      <span className="badge badge-outline badge-lg transform hover:scale-110 transition-transform duration-200">
                        {getLanguageFlag(user.learningLanguage)}
                        Learning: {capitialize(user.learningLanguage)}
                      </span>
                    </div>

                    {user.bio && (
                      <p className="text-sm opacity-70 group-hover:opacity-90 transition-opacity duration-300 line-clamp-3 leading-relaxed">
                        {user.bio}
                      </p>
                    )}

                    <div>
                      <span>Hobbies: {user.hobbies?.join(", ")}</span>
                      <span>Interests: {user.interests?.join(", ")}</span>
                    </div>

                    <button
                      className={`btn w-full mt-4 group/btn transform hover:scale-105 transition-all duration-300 ${
                        hasRequestBeenSent ? "btn-disabled" : "btn-primary"
                      }`}
                      onClick={() => sendRequestMutation(user._id)}
                      disabled={hasRequestBeenSent || isPending}
                    >
                      {hasRequestBeenSent ? (
                        <>
                          <CheckCircleIcon className="size-5 mr-2 group-hover/btn:animate-bounce" />
                          Request Sent
                        </>
                      ) : (
                        <>
                          <UserPlusIcon className="size-5 mr-2 group-hover/btn:animate-bounce" />
                          Send Friend Request
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
