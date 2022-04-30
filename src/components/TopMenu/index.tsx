import React, { FC } from 'react'
import { TopMenu } from './models/TopMenu';
import styles from './index.module.css';
import TopMenuComp from './layouts/TopMenu';

interface ITopMenuContainer{
  topmenus?:Array<TopMenu>
}
const TopMenuContainer : FC<ITopMenuContainer> = ({topmenus}) => {



  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
          {
            topmenus?.map(topmenu=><TopMenuComp menu={topmenu}/>)
          }
        </div>
    </div>
  )
}

export default TopMenuContainer;