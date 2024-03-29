import React, { FC, useEffect, useState } from 'react';
import ILink from './models/ILink';
import { Toplink } from './layouts/Toplink';
import styles from './index.module.css';
import { AiOutlineSearch } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import MapDropdown from './layouts/MapDropdown';
import RightButtons from './layouts/RightButtons';
import BottomColors from './layouts/BottomColors';

interface IHeader{
    links:Array<ILink>
}

interface IContext{
    mapShowed?:boolean;
    changeState?:Function
}

export const HeaderContext = React.createContext<IContext>({});

const Header : FC<IHeader> = ({links}) => {

    const [masterState,setMasterState] = useState<any>({
        mapShowed:false,
        changeValue : (key:string,val:string|number) => {
            setMasterState({...masterState,[key]:val})
        }
    });

    return (
        <HeaderContext.Provider value={masterState}>
        <div className="w-full flex">
            <div className="w-full flex flex-col">

                {/* Toplinks */}
                <div className="h-auto mt-2 flex justify-end relative right-24">
                    <Toplink links={links}/>
                </div>

                {/* Logo, search... line */}
                <div className="flex justify-center gap-2 mt-8">
                    <img src="./images/logo.png" className="m-3 mr-24 "></img>
                    <div className={styles.searchContainer}>
                        <AiOutlineSearch className={styles.searchIcon}/>
                        <input className={styles.searchInput} placeholder="Ürün, kategori veya marka ara" />
                        <button className={styles.searchButton}>ARA</button>
                    </div>

                    <div className={styles.mapContainer}>
                    <button onClick={()=>masterState.changeValue("mapShowed",!masterState.mapShowed)} className={styles.mapButton}>
                        <div className={styles.mapIconWrapper}>
                            <BiMap className={styles.mapIcon}/>
                        </div>
                        <div className={styles.mapTextContainer}>
                            <p className="text-black text-sm">Konum</p>
                            <p className="text-hb-orange text-xs">Konum Seç</p>
                        </div>
                    
                    </button>
                    <MapDropdown/>
                    </div>
                    <RightButtons/>
                </div>
                
                {/* COLORS */}
                <BottomColors colors={["bg-violet-500","bg-cyan-500","bg-rose-500","bg-orange-500","bg-purple-900","bg-green-600"]}/>

            </div>
        </div>
        </HeaderContext.Provider>
    );
}

export default Header;