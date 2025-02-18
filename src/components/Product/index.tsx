import Tag from "../Tag";
import * as S from "./styles";
type Props = {
  id: number;
  title: string;
  category: string;
  system: string;
  description: string;
  infos: string[];
  image: string;
};

const Product = ({ title, category, system, description, infos, image, id }: Props) => {

  if (!title) return null;

  const getDescription = (description: string) => {
    if (description.length > 90) {
      return description.slice(0, 93) + "...";
    }
    return description;
  };

  return (
    <S.Card  title={`Clique aqui para ver mais detalhes sobre o jogo: ${title}`}  to={`/product/${id}`}>
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescription(description) || "Descrição não disponível."}</S.Description>
    </S.Card>
  );
};

export default Product;
