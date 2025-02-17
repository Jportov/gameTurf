import { useDispatch } from "react-redux";
import Tag from "../Tag";
import { Card, Descricao, Infos, Titulo } from "./styles";

type Props = {
  id: number;
  title: string;
  category: string;
  system: string;
  description: string;
  infos: string[];
  image: string;
};

const Produto = ({ title, category, system, description, infos, image, id }: Props) => {
  const dispatch = useDispatch();
  if (!title) return null;

  const getDescricao = (description: string) => {
    if (description.length > 90) {
      return description.slice(0, 93) + "...";
    }
    return description;
  };

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescricao(description) || "Descrição não disponível."}</Descricao>
    </Card>
  );
};

export default Produto;
