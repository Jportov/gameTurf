import ProductList from "../../components/ProductList";
import { useGetActionGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulationQuery, useGetSportsQuery } from "../../services/api";
const Categories = () => {
    const {data: actionGames, isLoading: isLoadingAction} = useGetActionGamesQuery();
    const {data: fightGames, isLoading: isLoadingFight} = useGetFightGamesQuery();
    const {data: rpgGames, isLoading: isLoadingRPG} = useGetRpgGamesQuery();
    const {data: simulationGames, isLoading: isLoadingSimulation} = useGetSimulationQuery();
    const {data: sportsGames, isLoading: isLoadingSports} = useGetSportsQuery();


    if (isLoadingAction || isLoadingFight || isLoadingRPG || isLoadingSimulation || isLoadingSports) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ProductList title="Ação" background="black" games={actionGames || []} id="action" />
            <ProductList title="Luta" background="grey" games={fightGames || []} id="fight" />
            <ProductList title="Esportes" background="black" games={sportsGames || []} id="sports" />
            <ProductList title="Simulacao" background="grey" games={simulationGames || []} id="simulation" />
            <ProductList title="RPG" background="black" games={rpgGames || []} id="rpg" />
        </>
    );
}

export default Categories;