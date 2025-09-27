import { ThemeProvider } from '../ThemeProvider';
import { ThemeToggle } from '../ThemeToggle';

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-8 bg-background">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Theme Toggle Example</h3>
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}