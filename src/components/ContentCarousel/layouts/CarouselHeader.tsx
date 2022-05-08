import React, { FC } from 'react'
import styles from '../index.module.css'
export interface ICarouselHeader {
    headText: string
    linkText?: string
    linkURL?: string
}

const CarouselHeader: FC<ICarouselHeader> = ({ headText, linkText, linkURL }) => {
    return (
        <div className={styles.header}>
            <div className="text-3xl font-bold text-gray-700">
                {headText}
            </div>
            {
                linkText &&
                <div className="self-end text-sm text-hb-orange">
                    <a href={linkURL}>{linkText} {'>'}</a>
                </div>
            }
        </div>
    )
}

CarouselHeader.defaultProps = {
    linkURL : "#"
}

export default CarouselHeader;