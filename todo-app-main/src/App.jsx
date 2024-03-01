import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Items from './components/Items';

//  TODO: use a hook to determine screen's width and update isDesktop state based on that
// update the font-family

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isDesktop, setIsDesktop] = useState(375);

  const handleDarkToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'dark' : ''} relative dark:bg-veryDarkBlue`}>
      <Header
        dark={isDark}
        isDesktop={isDesktop}
      />
      <Input
        dark={isDark}
        onDarkToggle={handleDarkToggle}
      />
      <Items />
    </div>
  );
}

export default App;
