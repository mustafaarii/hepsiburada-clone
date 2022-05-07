import React, { useState } from 'react';
import { topmenus, headerlinks } from './components/constants/header';
import Header from './components/Header';
import TopMenuContainer from './components/TopMenu';

function App() {
  return (
    <div className="App">
      <Header links={headerlinks} />
      <TopMenuContainer topmenus={topmenus} />
    </div>
  );
}

export default App;
