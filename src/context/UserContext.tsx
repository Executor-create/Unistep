import { createContext, useEffect, useState } from "react";
import { fetchUser } from "../api/userApi";
import { User } from "../types/types";

type CurrentUserContextType = {
  username: string;
  phone: string;
  birthday: string;
  avatar_url: string;
  bio: string;
};

export const CurrentUserContext = createContext<CurrentUserContextType | null>(
  null
);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchUser();
        setUser(response);
      } catch (error) {
        console.log(error);
      }
    };

    // const intervalId = setInterval(fetchUserData, 200);

    // return () => {
    //   clearInterval(intervalId);
    // };
    fetchUserData();
  }, []);

  const currentUserContextValue: CurrentUserContextType = {
    username: user?.username || "",
    phone: user?.phone || "",
    birthday: user?.birthday || "",
    avatar_url: user?.avatar_url || "",
    bio: user?.bio || "",
  };

  return (
    <CurrentUserContext.Provider value={currentUserContextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
};
