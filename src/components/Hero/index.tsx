import { BannerHero, HeroInfos, TagBanner } from "./styles";

import { useDispatch } from "react-redux";
import { Game } from "../../Pages/Home";
import { add, open } from "../../store/reducers/cart";
import { priceFormat } from "../../utils";
import { Preco } from "../Banner/styles";
import { BtnComprar } from "../Button/styles";
import Tag from "../Tag";



type Props = {
    game: Game;
}

const Hero = ({ game }: Props) => {
    const dispatch = useDispatch();

    const addTocart = () => {
        dispatch(add(game));
        dispatch(open());
    }

    return  (
        <BannerHero style={{backgroundImage: `url(${game.media.cover})`}}>
            <div className="container">
                <TagBanner>   
                <Tag>{game.details.category}</Tag>
                <Tag>{game.details.system}</Tag>
                </TagBanner>
                <HeroInfos>
                    <h2>{game.name}</h2>
                    <Preco>{game.prices.discount && (<span> De {priceFormat(game.prices.old)}<br/></span>
                    )}
                    {game.prices.current && (<>
                    Por apenas {priceFormat(game.prices.current)}</>)}
                    </Preco>
                    {game.prices.current && ( 
                        <BtnComprar type="button" onClick={addTocart}>Adicionar ao Carrinho</BtnComprar>    
                    )}
                </HeroInfos>
            </div>
        </BannerHero>
    )
}

export default Hero