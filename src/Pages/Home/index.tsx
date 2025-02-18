import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";
import { useGetOnSaleQuery, useGetSoonQuery } from "../../services/api";


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