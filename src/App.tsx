import React, { useState } from 'react';
import { carouselcontent } from './components/constants/carousel';
import { topmenus, headerlinks } from './components/constants/header';
import Header from './components/Header';
import TopCarousel from './components/TopCarousel';
import TopMenuContainer from './components/TopMenu';

function App() {
  return (
    <div className="App">
      <Header links={headerlinks} />
      <TopMenuContainer topmenus={topmenus} />
      <TopCarousel content={carouselcontent} startIndex={0}/>

      
    </div>
  );
}

export default App;
