import { Game } from "../../Pages/Home";
import { priceFormat } from "../../utils";
import Produto from "../Produto";
import { ListProducts, ProductListContainer, TitleProductList } from "./styles";

export type Props = {
  title?: string;
  background: "grey" | "black";
  games: Game[];
  id?: string;
};


const ProductList = ({ background, title, games, id  }: Props) => {
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

  return (
    <ProductListContainer id={id} background={background} games={games}>
      <div className="container">
        {title && <TitleProductList>{title}</TitleProductList>}
        <ListProducts>
          {games.map((game) => (
            <li key={game.id}>
              <Produto
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
        </ListProducts>
      </div>
    </ProductListContainer>
  );
};

export default ProductList;
