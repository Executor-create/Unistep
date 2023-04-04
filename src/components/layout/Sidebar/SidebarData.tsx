type Item = {
  path: string;
  name: string;
};

const SidebarData = (): Item[] => {
  const items: Item[] = [
    { path: "/", name: "Main Page" },
    { path: "/profile", name: "Profile" },
    { path: "/journal", name: "Journal" },
    { path: "/chat", name: "Chat" },
    { path: "/schedule", name: "Schedule" },
  ];

  return items;
};

export default SidebarData;
