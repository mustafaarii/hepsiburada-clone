import React from 'react'
import HBStar from '../base-components/HBStar'
import { contentCarousel1, contentCarouselBrand } from '../components/constants/content-carousels'
import { explores } from '../components/constants/explores'
import { promoList } from '../components/constants/promos'
import ContentCarousel from '../components/ContentCarousel'
import CarouselBrand from '../components/ContentCarousel/layouts/CarouselBrand'
import CarouselCard from '../components/ContentCarousel/layouts/CarouselCard'
import CarouselHeader from '../components/ContentCarousel/layouts/CarouselHeader'
import ExploreContainer from '../components/ProductExplore'
import ExploreItem from '../components/ProductExplore/layouts/ExploreItem'
import { ExploreItemDTO } from '../components/ProductExplore/models/ExploreItemDTO'
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
            <div className="flex mx-auto">
                {
                    promoList.map(
                        (item: PromoItem) => <PromoItemComp imageURL={item.imageURL} description={item.description} link={item.link} />)
                }
            </div>)
    }


    return (
        <div className="flex flex-col gap-8 w-9/12 mx-auto">
            <ContentCarousel className="mt-10" headText="Süper Fiyat, Süper Teklif" linkText="Tümü">
                {renderCarouselCards()}
            </ContentCarousel>

            <Promo>
                {renderPromo()}
            </Promo>

            <ContentCarousel className="mt-10 mb-10" headText="Aradığın Markalar" sliderDivClass="text-gray-700">
                {renderCarouselBrands()}
            </ContentCarousel>

            <CarouselHeader headText="Keşfet" />
            <ExploreContainer title="Telefonlar" description="Keşfetmeye devam et">
                {
                    explores.map((item: ExploreItemDTO) => (
                        <ExploreItem
                            discountedPrice={item.discountedPrice}
                            price={item.price}
                            imageLink={item.imageLink}
                            imageURL={item.imageURL}
                            maxStarCount={item.maxStarCount}
                            starCount={item.starCount}
                            rate={item.rate}
                            title={item.title}
                        />
                    ))
                }

            </ExploreContainer>
        </div>
    )
}

export default Homepage;