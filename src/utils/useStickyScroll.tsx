import { useEffect, useState } from "react";

export function useStickyScroll(enabled: boolean = true) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabled]);

  return isSticky;
}
