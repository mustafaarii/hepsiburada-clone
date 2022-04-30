import React, { FC, useState } from 'react'
import { TopMenu } from '../models/TopMenu';

interface ITopMenu{
    menu:TopMenu
}
const TopMenuComp : FC<ITopMenu> = ({menu}) =>  {

  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
    <div 
    className="pl-6 pr-6 border-l-2 h-full break-words text-center text-[0.9rem] 
    hover:text-orange-600 hover:bg-white hover:cursor-pointer"
    onMouseOver={()=>setShowDetail(true)}
    onMouseOut={()=>setShowDetail(false)}
    >
        <button className="relative top-[25%] bottom-[25%] font-medium">{menu.name}</button>
    </div>
    <div className={`absolute  -bottom-5 w-9/12 bg-slate-200 ${!showDetail && 'hidden'}`}>
    {
      menu.submenuList?.map(submenu => (
        <>
        <h5 className="text-black"><a href={submenu.url}>{submenu.name}</a></h5>
        </>
      ))
    }
    </div>
    </>
  )
}


export default TopMenuComp;