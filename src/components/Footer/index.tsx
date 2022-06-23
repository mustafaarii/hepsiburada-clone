import React, { FC } from 'react'
import FooterBottom from './layouts/FooterBottom';
import FooterMenu from './layouts/FooterMenu';

export interface IFooter {
  width?: string
}
const Footer: FC<IFooter> = ({ width }) => {
  return (
    <div>
      <div className={`grid grid-cols-5 grid-rows-2 justify-center w-${width} mx-auto`}>
        <FooterMenu />
      </div>
    </div>
  )
}

export default Footer;
