import React, { FC, useEffect, useState } from 'react'

export interface ICarouselCard {
    link?: string
    title?: string
    imgURL?: string
    price?: string
}

const CarouselCard: FC<ICarouselCard> = ({ link, title, imgURL, price }) => {

    const [rolledPrice, setRolledPrice] = useState<Number | null>(null);
    const [mouseOnCard, setMouseOnCard] = useState<boolean>(false);
    const [mouseOnButton, setMouseOnButton] = useState<boolean>(false);

    useEffect(() => {
        if (price) {
            let newPrice: any = parseInt(price);
            newPrice = (Math.round(newPrice * 100) / 100).toFixed(2);
            setRolledPrice(newPrice);
        }
    }, [])

    const renderPriceOrAddBasket = () => {
        if(mouseOnCard){
            return (
                <button 
                className="bg-orange-50 rounded-md p-3 text-hb-orange font-medium h-12 hover:bg-orange-100 transition-colors"
                onClick={()=>alert("Sepete Eklendi")}
                onMouseEnter={()=>setMouseOnButton(true)}
                onMouseLeave={()=>setMouseOnButton(false)}
                >
                    Sepete Ekle
                </button>
            )
        }else{
            return <div className="text-hb-orange self-center text-xl font-semibold h-12">
                        {rolledPrice ? rolledPrice + " TL" : ""}
                    </div>
        }
    }

    const handleOnMouseEnter = (e: any) => {
        setMouseOnCard(true);
    }

    const handleOnMouseLeave = (e: any) => {
        setMouseOnCard(false);
    }

    return (
        <a
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            href={link && !mouseOnButton ? link : undefined}
            className="rounded-xl hover:shadow-xl cursor-pointer"
        >
            <div className="w-[15.25rem] h-[23.18rem] border-[1px] p-6 rounded-xl">

                <div className="flex flex-col justify-around w-full h-full">
                    <p className="text-xs">{title}</p>
                    <img src={imgURL} />
                    {renderPriceOrAddBasket()}
                </div>
            </div>
        </a>
    )
}

export default CarouselCard;
