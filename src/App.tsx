import React, { useState } from 'react';
import Header from './components/Header';
import TopMenuContainer from './components/TopMenu';
import { TopMenu } from './components/TopMenu/models/TopMenu';

function App() {

  const [topmenus,setTopMenus] = useState<Array<TopMenu>>([
    {name:"Elektronik", },
    {name:"Moda",submenuList:[{name:"Moda Anasayfa"}]},
    {name:"Ev, Yaşam, Kırtasiye Ofis",submenuList:[{name:"Sofra/Mutfak"}]},
    {name:"Oto, Bahçe, Yapı, Market"},
    {name:"Spor, Outdoor"},
    {name:"Kozmetik, Kişisel Bakım"},
    {name:"Süpermarket, Pet Shop"},
    {name:"Kitap, Müzik, Film, Hobi"}
  ])

  return (
    <div className="App">
      <Header />
      <TopMenuContainer topmenus={topmenus} />
    </div>
  );
}

export default App;
