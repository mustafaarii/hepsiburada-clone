import React, { FC, useContext } from 'react'
import {HeaderContext } from '..';
const MapDropdown : FC = (props) => {
    
    const {mapShowed} = useContext(HeaderContext);
  return (
    <div className={`bg-white w-54 h-auto self-end absolute top-14 -left-12 shadow-md hover:cursor-default
                    flex flex-col justify-center content-start gap-2 p-2 rounded-lg border ${mapShowed ? "inline-block" : "hidden"} z-10`}>
        <p className="ml-2 text-md text-gray-500 font-semibold">Konumunuzu Belirleyin</p>
        <p className=" ml-2 text-xs text-gray-500">Adresinizi veya konum bilgilerinizi seçerek özel hizmetleri görebilirsiniz.</p>
        
        <div className="flex flex-col gap-4 mt-2">
        <select className="p-2 py-3 w-11/12 self-center rounded-lg border-2 border-gray-200 text-sm text-stone-500 bg-stone-100">
            <option>İl Seçin</option>
        </select>
        <select className="p-2 py-3 w-11/12 self-center rounded-lg border-2 border-gray-200 text-sm text-stone-500 bg-stone-100">
            <option>İlçe Seçin</option>
        </select>
        <select className="p-2 py-3 w-11/12 self-center rounded-lg border-2 border-gray-200 text-sm text-stone-500 bg-stone-100">
            <option>Mahalle Seçin</option>
        </select>

        <button className="p-3 bg-gray-300 w-11/12 self-center rounded-lg text-stone-500 text-sm font-semibold">Kaydet</button>
        </div>
    </div>
    )
}

export default MapDropdown;
