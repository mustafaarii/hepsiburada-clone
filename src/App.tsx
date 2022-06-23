import React, { useState } from 'react';
import { carouselcontent } from './components/constants/carousel';
import { contentCarousel1 } from './components/constants/content-carousels';
import { topmenus, headerlinks } from './components/constants/header';
import ContentCarousel from './components/ContentCarousel';
import CarouselCard from './components/ContentCarousel/layouts/CarouselCard';
import Footer from './components/Footer';
import FooterBottom from './components/Footer/layouts/FooterBottom';
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

      <Homepage />

      <div className="w-9/12 mx-auto my-6 flex flex-col gap-6 text-sm">
        <hr />
        Alışveriş fırsatlarıTürkiye'nin en büyük online alışveriş sitesi Hepsiburada, 2001 yılından bu yana hizmet veriyor. Doğan Holding bünyesinde faaliyet gösteren Hepsiburada, yenilikleri ile Türkiye'nin dijital alışveriş sektörüne yön
        veriyor. Online alışveriş deneyimini her geçen gün daha kolay hale getiren, dijitalleşen dünyanın gereklerine uygun geliştirmelerle sunduğu hizmetleri daha da avantajlı kılan Hepsiburada, ziyaretçilerine bol çeşit, uygun fiyat,
        hızlı teslimat ve sürpriz indirimler sunuyor. Bugün 35'ten fazla kategori içinde 20 milyondan fazla ürün çeşidi bulunduran site, 16 milyondan fazla üye ile Türkiye'de e-ticaretin lideri olmanın gururunu yaşıyor
        <hr />
        <Footer />
      </div>
      <FooterBottom />
    </div>
  );
}

export default App;
