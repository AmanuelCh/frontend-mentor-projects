import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Items from './components/Items';

//  TODO: use a hook to determine screen's width and update isDesktop state based on that
// update the font-family

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: '10 minutes meditation',
      completed: true,
    },
    {
      id: 2,
      title: 'Read for 1 hour',
      completed: false,
    },
  ]);
  const [isDark, setIsDark] = useState(false);
  const [isDesktop, setIsDesktop] = useState(375);

  // toggle dark mode
  const handleDarkToggle = () => {
    setIsDark(!isDark);
  };

  // checkbox
  const handleCheckItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
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
      <Items
        items={items}
        onCheckItem={handleCheckItem}
      />
    </div>
  );
}

export default App;
