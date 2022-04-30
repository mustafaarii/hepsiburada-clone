import React, { FC } from 'react'
import { TopMenu } from '../models/TopMenu';
import { TopSubMenu } from '../models/TopSubMenu';

interface ITopSubMenu{
    submenus:TopSubMenu[] | undefined
}

const TopSubMenuComp : FC<ITopSubMenu> = ({submenus}) => {
  return (
    <div className={`grid grid-cols-3 grid-rows-4n grid-flow-col gap-3`}>
    {
      submenus?.map(submenu => (
        <div>
            <p className="text-hb-orange font-bold"><a href={submenu.url}>{submenu.name}</a></p>
            <div>
                {
                    submenu.topLabelList?.map(label=>(
                        <p className="text-sm">
                            <a href={label.url}>{label.name}</a>
                        </p>
                    ))
                }
            </div>
        </div>
      ))
    }
    </div>
  )
}

export default TopSubMenuComp;