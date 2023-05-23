import { getTokenData } from "../../../services/authService";

type Item = {
  path: string;
  name: string;
};

const SidebarData = (): Item[] => {
  const token = getTokenData();

  const items: Item[] = [
    { path: "/", name: "Main Page" },
    { path: "/profile", name: "Profile" },
    { path: "/journal", name: "Journal" },
    { path: "/chat", name: "Chat" },
    { path: "/schedule", name: "Schedule" },
    { path: "/signin", name: token ? "Log out" : "Sign in" },
  ];

  return items;
};

export default SidebarData;
