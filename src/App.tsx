import React, { useState } from 'react';
import { carouselcontent } from './components/constants/carousel';
import { contentCarousel1 } from './components/constants/content-carousels';
import { topmenus, headerlinks } from './components/constants/header';
import ContentCarousel from './components/ContentCarousel';
import CarouselCard from './components/ContentCarousel/layouts/CarouselCard';
import Header from './components/Header';
import TopCarousel from './components/TopCarousel';
import TopMenuContainer from './components/TopMenu';
import Homepage from './pages/Homepage';
function App() {
  return (
    <div className="App">
      <Header links={headerlinks} />
      <TopMenuContainer topmenus={topmenus} />
      <TopCarousel content={carouselcontent} startIndex={0} />

      <Homepage/>  
    </div>
  );
}

export default App;
