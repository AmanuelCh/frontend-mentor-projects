import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Items from './components/Items';

const Layout = ({ isDark, onDarkToggle }) => {
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
  const [isDesktop, setIsDesktop] = useState(781);

  // add items
  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  // mark as read
  const handleCheckItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // delete item
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  // clear items
  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <div className='dark:bg-veryDarkBlue min-h-[100vh]'>
      <Header
        dark={isDark}
        isDesktop={isDesktop}
      />
      <Input
        dark={isDark}
        onDarkToggle={onDarkToggle}
        onAddItem={handleAddItem}
      />
      <Items
        items={items}
        isDesktop={isDesktop}
        onCheckItem={handleCheckItem}
        onDeleteItem={handleDeleteItem}
        onClearItems={handleClearItems}
        // pass setter function
        setItems={setItems}
      />
    </div>
  );
};

export default Layout;
