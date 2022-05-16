import React from 'react'
import { contentCarousel1, contentCarouselBrand } from '../components/constants/content-carousels'
import ContentCarousel from '../components/ContentCarousel'
import CarouselBrand from '../components/ContentCarousel/layouts/CarouselBrand'
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

    const renderCarouselBrands = () => {
        return (<>
            {
                contentCarouselBrand.map((item) =>
                <CarouselBrand
                    logo={item.logo}
                    name={item.name}
                    url={item.url}
                />
                )
            }
        </>)

    }


    return (
        <div>
            <ContentCarousel className="mt-10" headText="Süper Fiyat, Süper Teklif" linkText="Tümü">
                {renderCarouselCards()}
            </ContentCarousel>
            <ContentCarousel className="mt-10 mb-10" headText="Aradığın Markalar" sliderDivClass="text-gray-700">
                {renderCarouselBrands()}
            </ContentCarousel>
            ----
        </div>
    )
}

export default Homepage;