import React, { FC, useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from "./index.module.css"
import CarouselHeader from './layouts/CarouselHeader';
export interface IContentCarousel {
    className?: string
    children?: JSX.Element
}

export interface IMasterState {
    clickCount: number, // carousel tuşlara tıklanma sayısı
    totalClickPermision: number, // tuşlara izin verilen toplam tıklama miktarı 
}
const ContentCarousel: FC<IContentCarousel> = ({ className, children }) => {

    const [masterState, setMasterState] = useState<IMasterState>({
        clickCount: 0,
        totalClickPermision: 4
    })

    const handleButtonClick = (type:number /* 1:arttır 0:azalt */) => {
        let {clickCount, totalClickPermision} = masterState;

        if(type===0) clickCount-=1;
        else if(type===1) clickCount+=1;
        if(clickCount >= totalClickPermision || clickCount < 0) clickCount=0;

        setMasterState({...masterState,clickCount})
    }

    return (
        <div className={className}>
            <div className={styles.wrapper}>
                <div className={styles.container}>

                    <IoIosArrowBack
                        className="absolute rounded-full border-2 text-3xl text-gray-700 top-1/2 -left-6 hover:cursor-pointer"
                        onClick={()=>handleButtonClick(0)}
                    />

                    {/* BAŞLIK */}
                    <CarouselHeader headText="Süper Fiyat, Süper Teklif" linkText="Tümü" linkURL="#" />

                    <div className={styles.content}>
                        <div
                            className={styles.sliderDiv +
                                ` -translate-x-${masterState.clickCount}/${masterState.totalClickPermision} 
                        transition-transform`}>

                            {children}
                        </div>
                    </div>

                    <IoIosArrowForward
                        className="absolute rounded-full border-2 text-3xl text-gray-700 top-1/2 -right-6 hover:cursor-pointer"
                        onClick={()=>handleButtonClick(1)}
                    />
                </div>
            </div>
        </div>
    )
}
export default ContentCarousel;