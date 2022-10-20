import { getLabel } from "components/Label";
import Styled from "components/styles/Index.styled";
import { toggleType } from "hooks/useModal";
type Images = string[];
interface ICard {
  id: number;
  name?: string;
  description?: string;
  labels?: string[];
  devs?: string[];
  images: Images;
  tags: string[];
}

interface Props {
  card: ICard;
  toggle: toggleType;
}

function Card({ card, toggle }: Props) {
  return (
    <Styled.CardObj.Wrapper onMouseDown={() => toggle(card.id)}>
      <Styled.CardObj.Image main={card.images[0]} />
      <Styled.CardObj.Footer>
        <Styled.CardObj.Title>{card.name}</Styled.CardObj.Title>
        <Styled.CardObj.LabelWrapper>
          {card.tags?.map((item) => getLabel(item))}
        </Styled.CardObj.LabelWrapper>
      </Styled.CardObj.Footer>
    </Styled.CardObj.Wrapper>
  );
}

export default Card;
