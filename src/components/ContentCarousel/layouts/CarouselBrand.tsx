import React, { FC } from 'react'

export interface ICarouselBrand{
    url?:string,
    logo?:string,
    name?:string
}

const CarouselBrand : FC<ICarouselBrand> = ({url,logo,name}) => {
  return (
    <a href={url} className="flex items-center justify-center">
        <div className="w-[9.5rem] h-[8rem] flex flex-col">
            <img src={logo} className="border-[1px] rounded-md object-cover" />
            <p className="text-center mt-2">{name}</p>
        </div>
        
    </a>
  )
}

export default CarouselBrand;
