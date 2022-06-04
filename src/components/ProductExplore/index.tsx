import React, { FC } from 'react'

export interface IExploreContainer{
  title?:string,
  description?:string,
  children?:JSX.Element[]
}

const ExploreContainer : FC<IExploreContainer> = ({children, title, description}) => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <p className="text-xl tracking-wide font-normal text-hb-blue">{title}</p>
        <p className="text-sm">{description}</p>
      </div>

      <div className="flex flex-wrap gap-6">
      {children}
      </div>
    </div>
  )
}

export default ExploreContainer;