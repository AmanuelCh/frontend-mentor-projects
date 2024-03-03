import { useState } from 'react';
import Layout from './Layout';

//  TODO: use a hook to determine screen's width and update isDesktop state based on that
// update the font-family

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleDarkToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'dark' : ''} relative dark:bg-veryDarkBlue`}>
      <Layout
        isDark={isDark}
        onDarkToggle={handleDarkToggle}
      />
    </div>
  );
}

export default App;
