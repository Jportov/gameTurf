import { useGetFeaturedGameQuery } from '../../services/api';
import { priceFormat } from '../../utils';
import Button from '../Button';
import Tag from '../Tag';
import { ImgBanner, Preco, Titulo } from './styles';

const Banner = () => {
const { data: game, isLoading } = useGetFeaturedGameQuery ();

if (isLoading) {
    return <h3>Carregando...</h3>;
}

if (!game) {
    return <h3>Nenhum jogo encontrado</h3>;
}

return (
    <ImgBanner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
        <Tag size="big" children={'Destaque do dia'} />
        <div>
            <Titulo>{game.name}</Titulo>
            <Preco>
            De <span>{priceFormat(game.prices.old)}</span> 
            <br/> por apenas {priceFormat(game.prices.current)}
        </Preco>
        </div>
        <Button type="link" to={`/product/${game.id}`} title="Clique aqui para aproveitar essa oferta">
        Aproveitar
        </Button>
    </div>
    </ImgBanner>
);
};

export default Banner;