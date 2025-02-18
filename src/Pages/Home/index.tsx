import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";
import { useGetOnSaleQuery, useGetSoonQuery } from "../../services/api";

export interface GalleryItemProps  {
        type: 'video' | 'image'
        url: string }

export interface Game  {

        id: number
        name: string
        description: string
        release_Date?: string
        prices: {
                discount?: number
                old?: number
                current?: number 
        }
        details: {
                category: string
                system: string
                developer: string
                publisher: string
                languages: string
        }
        media: {
                thumbnail: string
                cover: string
                gallery: GalleryItemProps[]
        }
}

const Home = () => {
        const { data: onSalesGames, isLoading: isLoadingSale } = useGetOnSaleQuery();
        const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery();

        return  (

                <>
                        <Banner />
                        <ProductList title="Promoções" background="grey" games={onSalesGames} id="on-sale" isLoading={isLoadingSale} />
                        <ProductList title="Em breve" background="black" games={soonGames} id="coming-soon" isLoading={isLoadingSoon} />
                </>
                
                )
}

export default Home