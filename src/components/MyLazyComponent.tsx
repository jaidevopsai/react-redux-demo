import React from 'react';
import WindowList from './WindowList';

const MyLazyComponent: React.FC = () => {
  return (
    <div>
      <h2>This is a lazily loaded component!</h2>
        <WindowList />
    </div>
  );
};

export default MyLazyComponent;