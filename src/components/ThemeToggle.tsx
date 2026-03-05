import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 hover:scale-110 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon 
          icon={faSun} 
          className="w-5 h-5 text-yellow-400 group-hover:rotate-45 transition-transform duration-300" 
        />
      ) : (
        <FontAwesomeIcon 
          icon={faMoon} 
          className="w-5 h-5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" 
        />
      )}
    </button>
  );
}
