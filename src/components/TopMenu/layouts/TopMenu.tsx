import React, { FC, useState } from 'react'
import { TopMenu } from '../models/TopMenu';
import TopSubMenuComp from './TopSubMenu';

interface ITopMenu {
  menu: TopMenu
}
const TopMenuComp: FC<ITopMenu> = ({ menu }) => {

  const [showDetail, setShowDetail] = useState(false);

  const renderDetails = () => {
    console.log(menu.imageMenuList);
    
    return (
      <div className="bg-white absolute p-10 h-min top-full left-0 bottom-0 w-full flex flex-row justify-center">
      <TopSubMenuComp submenus={menu.submenuList} />
      <div className="grid grid-cols-2 gap-2">
        {
          menu.imageMenuList?.map((imageMenu,index)=>(
            index===0 
            ? <img className="col-span-full auto-rows-min rounded-md" alt={imageMenu.name} src={imageMenu.image} />
            : <img className="rounded-md" alt={imageMenu.name} src={imageMenu.image} />
          ))
        }
      </div>
      </div>
    )
  }

  return (
    <div
      className="h-full w-auto"
      onMouseOver={() => setShowDetail(true)}
      onMouseOut={() => setShowDetail(false)}
      >
        <div
          className={`after:border-l-2 after:absolute after:h-6 after:top-4 h-full break-words text-center text-[0.9rem]
          ${showDetail && "text-hb-orange bg-white cursor-pointer"}`}
        >
          <button className="relative top-[25%] w-full bottom-[25%] pl-6 pr-6 font-medium">{menu.name}</button>
        </div>
          {
            showDetail && renderDetails()
          }
    </div>
  )
}


export default TopMenuComp;