import { useGetFeaturedGameQuery } from '../../services/api';
import { priceFormat } from '../../utils';
import Button from '../Button';
import Loader from '../Loaders';
import Tag from '../Tag';
import * as S from './styles';

const Banner = () => {
const { data: game, isLoading } = useGetFeaturedGameQuery ();


if (!game) {
    return <Loader />;
}

return (
    <S.ImgBanner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
        <Tag size="big" children={'Destaque do dia'} />
        <div>
            <S.Title>{game.name}</S.Title>
            <S.Price>
            De <span>{priceFormat(game.prices.old)}</span> 
            <br/> por apenas {priceFormat(game.prices.current)}
        </S.Price>
        </div>
        <Button type="link" to={`/product/${game.id}`} title="Clique aqui para aproveitar essa oferta">
        Aproveitar
        </Button>
    </div>
    </S.ImgBanner>
);
};

export default Banner;