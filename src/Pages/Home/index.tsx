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
        const { data: onSalesGames } = useGetOnSaleQuery();
        const { data: soonGames } = useGetSoonQuery();

        if (!onSalesGames || !soonGames) {
                return <div>Loading...</div>;
        }

        return  (

                <>
                        <Banner />
                        <ProductList title="Promoções" background="grey" games={onSalesGames} id="on-sale" />
                        <ProductList title="Em breve" background="black" games={soonGames} id="coming-soon" />
                </>
                
                )
}

export default Home