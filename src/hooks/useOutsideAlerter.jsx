import { useEffect } from "react";

export default function useOutsideAlerter({ menuRef, setMenuOpened, menuOpened }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (menuOpened) {
          setMenuOpened(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setMenuOpened, menuOpened]);
}
