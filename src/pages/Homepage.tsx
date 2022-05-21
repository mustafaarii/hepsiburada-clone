import React from 'react'
import { contentCarousel1, contentCarouselBrand } from '../components/constants/content-carousels'
import { promoList } from '../components/constants/promos'
import ContentCarousel from '../components/ContentCarousel'
import CarouselBrand from '../components/ContentCarousel/layouts/CarouselBrand'
import CarouselCard from '../components/ContentCarousel/layouts/CarouselCard'
import Promo from '../components/Promo'
import PromoItemComp from '../components/Promo/layouts/PromoItem'
import { PromoItem } from '../components/Promo/models/PromoItem'

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

    const renderPromo = () => {
        return (
        <div className="w-8/12 flex mx-auto">
        {
            promoList.map(
                (item:PromoItem)=><PromoItemComp imageURL={item.imageURL} description={item.description} link={item.link}/>)
        }
        </div>)
    }


    return (
        <div className="flex flex-col gap-8">
            <ContentCarousel className="mt-10" headText="Süper Fiyat, Süper Teklif" linkText="Tümü">
                {renderCarouselCards()}
            </ContentCarousel>

            <Promo>
                {renderPromo()}
            </Promo>

            <ContentCarousel className="mt-10 mb-10" headText="Aradığın Markalar" sliderDivClass="text-gray-700">
                {renderCarouselBrands()}
            </ContentCarousel>
            
            
        </div>
    )
}

export default Homepage;