import React, { FC } from 'react'
import { topmenus } from '../../constants/header';
import { TopMenu } from '../../TopMenu/models/TopMenu';
import { TopSubMenu } from '../../TopMenu/models/TopSubMenu';

const FooterMenu : FC = () => {
  return (
    <>
      {
        topmenus.map((menu:TopMenu) =>
        <div className="flex flex-col">
            <p className="font-bold">{menu.name}</p>
            {
              menu.submenuList?.map((submenu:TopSubMenu)=>
              <div>
              <a href={submenu.url} className="text-sm" >{submenu.name}</a>
              </div>
            )
            }
        </div>            
        )
      }
      </>
  )
}

export default FooterMenu;

