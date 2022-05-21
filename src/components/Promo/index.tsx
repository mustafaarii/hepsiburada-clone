import React, { FC } from 'react'

export interface IPromo{
    children?:JSX.Element
}

const Promo : FC<IPromo> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Promo;