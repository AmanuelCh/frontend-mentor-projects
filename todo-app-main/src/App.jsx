import { useState } from 'react';
import Layout from './Layout';

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
