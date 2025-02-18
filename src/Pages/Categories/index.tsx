import ProductList from "../../components/ProductList";
import { useGetActionGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulationQuery, useGetSportsQuery } from "../../services/api";
const Categories = () => {
    const {data: actionGames, isLoading: isLoadingAction} = useGetActionGamesQuery();
    const {data: fightGames, isLoading: isLoadingFight} = useGetFightGamesQuery();
    const {data: rpgGames, isLoading: isLoadingRPG} = useGetRpgGamesQuery();
    const {data: simulationGames, isLoading: isLoadingSimulation} = useGetSimulationQuery();
    const {data: sportsGames, isLoading: isLoadingSports} = useGetSportsQuery();



    return (
        <>
            <ProductList title="Ação" background="black" games={actionGames || []} id="action" isLoading={isLoadingAction} />
            <ProductList title="Luta" background="grey" games={fightGames || []} id="fight" isLoading={isLoadingFight} />
            <ProductList title="Esportes" background="black" games={sportsGames || []} id="sports" isLoading={isLoadingRPG} />
            <ProductList title="Simulacao" background="grey" games={simulationGames || []} id="simulation" isLoading={isLoadingSimulation} />
            <ProductList title="RPG" background="black" games={rpgGames || []} id="rpg" isLoading={isLoadingSports} />
        </>
    );
}

export default Categories;