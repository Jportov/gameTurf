import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import { useGetGameQuery } from "../../services/api";

const ProductPage = () => {
  const { id } = useParams();
  const { data: game } = useGetGameQuery(id!);
  
  if (!game) return (<h3>'Carregando...'</h3>);

  return (
    <>
      <Hero game={game}/>
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes " background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}<br />
          <b>Desenvolvedor:</b> {game.details.developer}<br />
          <b>Editora:</b> {game.details.publisher}<br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo {Array.isArray(game.details.languages) ? game.details.languages.join(", ") : "N/A"}<br />
        </p>
      </Section>
      <Gallery name={game.name} defaultImage={game.media.cover} items={game.media.gallery}/>
    </>
  );
}

export default ProductPage;