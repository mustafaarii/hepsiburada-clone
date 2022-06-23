import React, { FC, useEffect, useState } from 'react'
import HBStar from '../../../base-components/HBStar';

export interface IExploreItem {
  imageURL?: string,
  imageLink?: string,
  title?: string,
  starCount?: number,
  maxStarCount?: number,
  rate?: number,
  price?: number,
  discountedPrice?: number,
}

const ExploreItem: FC<IExploreItem> = ({ imageURL, title, starCount, maxStarCount, rate, price, discountedPrice, imageLink }) => {

  const renderPrice = () => {
    if (discountedPrice && price) {
      return (
        <div>
          <p className="text-lg font-bold">{discountedPrice} TL</p>
          <div className="flex">
            <p className="text-sm font-light line-through">
              {price} TL
            </p>
            <span className="text-red-500 font-bold text-xs ml-2">%{(((price-discountedPrice)/price)*100).toFixed(2)}</span>
          </div>
        </div>
      )
    } else if (price) {
      return (<p className="text-lg font-bold">{price}<span className="text-sm">TL</span></p>)
    } else {
      return null;
    }
  }

  return (
    <div className="w-48 flex flex-col">
      <a href={imageLink} className="image w-full flex justify-center border-[1px] rounded-lg p-2 hover:shadow-md">
        <div>
          <img src={imageURL} className="w-32" />
        </div>
      </a>
      <div className="title pt-2 pl-2">
        <p className="text-xs">{title && title?.length > 55 ? title?.slice(0,55)+"..." : title}</p>
      </div>
      <div className="star p-3 flex gap-2 mb-4">
        <HBStar
          max={maxStarCount ? maxStarCount : 0}
          total={starCount}
        />
        <p className="text-xs font-light">{rate}</p>
      </div>
      <div className="price pl-2">
        {renderPrice()}
      </div>
    </div>
  )
}

export default ExploreItem;