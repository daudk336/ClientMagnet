import Header from '../Header';
import { useState } from 'react';

export default function HeaderExample() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <Header 
      isDark={isDark} 
      toggleDark={() => setIsDark(!isDark)} 
    />
  );
}