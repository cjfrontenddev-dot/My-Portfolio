import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleButton}
      data-theme={theme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun
        className={`${styles.icon} ${styles.sun} ${theme === "light" ? styles.active : ""}`}
      />
      <Moon
        className={`${styles.icon} ${styles.moon} ${theme === "dark" ? styles.active : ""}`}
      />
    </button>
  );
}
