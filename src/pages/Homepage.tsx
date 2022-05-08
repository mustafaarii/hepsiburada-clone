import React from 'react'
import { contentCarousel1 } from '../components/constants/content-carousels'
import ContentCarousel from '../components/ContentCarousel'
import CarouselCard from '../components/ContentCarousel/layouts/CarouselCard'

const Homepage = () => {

    const renderCarouselCards = () => {
        const zero = 0;
        return (<>
            {
                contentCarousel1.map((item) =>
                    <CarouselCard
                        title={item.title}
                        link={item.link}
                        imgURL={item.img}
                        price={item.price ? item.price.toString() : zero.toString()}
                    />
                )
            }
        </>)

    }

    return (
        <div>
            <ContentCarousel className="mt-10">
                {renderCarouselCards()}
            </ContentCarousel>
            <ContentCarousel className="mt-10">
                {renderCarouselCards()}
            </ContentCarousel>
        </div>
    )
}

export default Homepage;