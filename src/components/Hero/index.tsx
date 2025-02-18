import * as S from "./styles";

import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";

import { priceFormat } from "../../utils";
import { Price } from "../Banner/styles";
import { ButtonContainer } from "../Button/styles";
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
        <S.BannerHero style={{backgroundImage: `url(${game.media.cover})`}}>
            <div className="container">
                <S.TagBanner>   
                <Tag>{game.details.category}</Tag>
                <Tag>{game.details.system}</Tag>
                </S.TagBanner>
                <S.HeroInfos>
                    <h2>{game.name}</h2>
                    <Price>{game.prices.discount && (<span> De {priceFormat(game.prices.old)}<br/></span>
                    )}
                    {game.prices.current && (<>
                    Por apenas {priceFormat(game.prices.current)}</>)}
                    </Price>
                    {game.prices.current && ( 
                        <ButtonContainer type="button" title="Adicionar ao Carrinho" onClick={addTocart}>Adicionar ao Carrinho</ButtonContainer>    
                    )}
                </S.HeroInfos>
            </div>
        </S.BannerHero>
    )
}

export default Hero