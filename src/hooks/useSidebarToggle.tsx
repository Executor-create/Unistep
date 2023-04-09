import { useState } from "react";

type UseSidebarToggleType = () => {
  isOpen: boolean;
  toggle: () => void;
};

const useSidebarToggle: UseSidebarToggleType = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggle = () => setOpen(!isOpen);

  return { isOpen, toggle };
};

export default useSidebarToggle;
