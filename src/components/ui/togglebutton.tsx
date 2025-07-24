import { Moon, Sun } from 'lucide-react';
import useThemeAtom from '../../hooks/useThemeAtom';
import { Button } from './button';

export default function ToggleButton() {
  const [theme, toggleTheme] = useThemeAtom();
  const ClassName =
    'transition-all ease-linear duration-150 active:scale-50 active:translate-y-1 text-[hsl(222.2,84%,4.9%)]';
  return (
    <Button
      className="absolute top-0 right-0 m-3 h-10 w-10 rounded-full p-0"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <Sun className={ClassName} />
      ) : (
        <Moon className={ClassName} />
      )}
    </Button>
  );
}
