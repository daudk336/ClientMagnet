import { ThemeProvider, useTheme } from '../ThemeProvider';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

function ThemeToggleExample() {
  const { isDark, toggleDark } = useTheme();
  
  return (
    <div className="p-8 space-y-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Theme Provider Example</h3>
        <p className="text-muted-foreground mb-4">
          Current theme: {isDark ? 'Dark' : 'Light'}
        </p>
        <Button onClick={toggleDark} variant="outline">
          {isDark ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
          Toggle Theme
        </Button>
      </div>
    </div>
  );
}

export default function ThemeProviderExample() {
  return (
    <ThemeProvider defaultTheme="light">
      <ThemeToggleExample />
    </ThemeProvider>
  );
}