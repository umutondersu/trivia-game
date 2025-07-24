import { Outlet } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import ToggleButton from './components/ui/togglebutton';

export default function App() {
  return (
    <div className="relative overflow-clip">
      <ToggleButton />
      <Outlet />
      <a
        className="group sm:-mb-12 absolute bottom-0 w-full text-center text-muted md:mb-2"
        href="https://github.com/umutondersu"
        rel="noopener"
        target="_blank"
      >
        Made by{' '}
        <span className="transition-colors delay-0 duration-100 ease-linear group-hover:text-muted-foreground group-hover:underline">
          Umut
        </span>
      </a>
      <Toaster />
    </div>
  );
}
