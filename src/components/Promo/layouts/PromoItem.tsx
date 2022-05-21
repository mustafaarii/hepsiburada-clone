import React, { FC } from 'react'

export interface IPromoItem{
    imageURL?:string,
    description?:string,
    link?:string
}

const PromoItem : FC<IPromoItem> = ({imageURL, description, link}) => {
  return (
    <div className="w-full h-auto m-2 flex flex-col justify-end rounded-lg">
        <div className="w-full h-full p-2 pb-5 justify-self-start">
            <span className="text-lg">{description}</span>
        </div>
        <div className="w-full h-full">
        <a className="hover:cursor-pointer" href={link} >  
            <img className="min-w-full object-fill rounded-lg" src={imageURL}/>
        </a>
        </div>
    </div>
  )
}

export default PromoItem;