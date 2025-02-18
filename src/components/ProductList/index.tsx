import { Game } from "../../Pages/Home";
import { priceFormat } from "../../utils";
import Loader from "../Loaders";
import Product from "../Product";
import * as S from "./styles";

export type Props = {
  title?: string;
  background: "grey" | "black";
  games?: Game[];
  id?: string;
  isLoading: boolean;
};


const ProductList = ({ background, title, games, id, isLoading }: Props) => {
  const getNameTags = (game: Game) => {
    const tags = [];
    if (game.release_Date) {
      tags.push(game.release_Date);
    }

    if (game.prices.discount) {
      tags.push(`-${game.prices.discount}%`);
    }

    if (game.prices.current) {
      tags.push(priceFormat(game.prices.current));
    }

    return tags;
  };

  if(isLoading) {

    return <Loader />
  }

  return (
    <S.ProductListContainer id={id} background={background} games={games}>
      <div className="container">
        {title && <S.TitleProductList>{title}</S.TitleProductList>}
        <S.ListProducts>
          {games &&
           games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getNameTags(game)}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </S.ListProducts>
      </div>
    </S.ProductListContainer>
  );
};

export default ProductList;
