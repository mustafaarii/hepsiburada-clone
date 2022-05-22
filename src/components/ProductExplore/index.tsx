import React, { FC } from 'react'

export interface IExploreContainer{
  children?:JSX.Element
}

const ExploreContainer : FC<IExploreContainer> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ExploreContainer;