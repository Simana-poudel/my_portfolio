'use client';
import React, { useState } from 'react';
import AdminAboutDashboard from './AdminAboutDashboard';

const AdminDrawer = () => {
  const [selectedItem, setSelectedItem] = useState('about'); // Default selected item

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const getContent = () => {
    switch (selectedItem) {
      case 'about':
        return <div><AdminAboutDashboard /></div>;
      case 'user':
        return <div>User Content</div>;
      case 'blog':
        return <div>Blog Content</div>;
      default:
        return <div>Select an item from the left menu</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side: Navigation */}
      <div className="w-1/4 bg-gray-200 p-4">
        <ul>
          <li className='cursor-pointer p-4 hover:bg-background-1' onClick={() => handleItemClick('about')}>About</li>
          <li className='cursor-pointer p-4 hover:bg-background-1' onClick={() => handleItemClick('user')}>User</li>
          <li className='cursor-pointer p-4 hover:bg-background-1' onClick={() => handleItemClick('blog')}>Blog</li>
        </ul>
      </div>

      {/* Right Side: Content */}
      <div className="w-3/4 p-4">{getContent()}</div>
    </div>
  );
};

export default AdminDrawer;
