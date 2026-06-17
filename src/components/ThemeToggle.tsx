import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light") return "light";
  }
  try {
    // Dark by default; a light choice only lives for the current session.
    return sessionStorage.getItem("theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    try {
      sessionStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggle = () => {
    // enable a brief colour cross-fade only while switching
    document.documentElement.classList.add("theme-transition");
    setTheme((t) => (t === "light" ? "dark" : "light"));
    window.setTimeout(
      () => document.documentElement.classList.remove("theme-transition"),
      450
    );
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle theme"
      data-cursor="disable"
    >
      {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};

export default ThemeToggle;
