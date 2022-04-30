import React, { FC, useEffect } from 'react'

interface IBottomColors {
    colors: Array<string>
}
 const BottomColors : FC<IBottomColors> = ({colors}) => {

  return (
    <div className="w-full">
                    {
                        colors.length === 1 ? <span className={`${colors[0]} w-1 h-2.5 inline-block`}></span>
                        : colors.map(color=><span className={`${color} w-1/6 h-2.5 inline-block`}></span>)
                    }
    </div>
  )
}

export default BottomColors;