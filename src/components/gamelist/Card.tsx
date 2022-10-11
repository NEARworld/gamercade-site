import styled from "styled-components";
import Label from 'components/Label';
import { labels } from "mocks/labels";
import { toggleType } from "hooks/useModal";
interface Images {
  main: string;
  sub?: string[];
}
interface ICard {
  id: number;
  name?: string;
  description?: string;
  labels?: string[];
  devs?: string[];
  images: Images;
  tags: string[]
}

interface Props {
  card: ICard;
  toggle: toggleType;
}

function getLabel(label: string | undefined) {
  const data = labels.filter((item) => item.text === label)[0];
  return <Label key={data.id} data={data} />
}

function Card({ card, toggle }: Props) {
  return <Wrapper onMouseDown={() => toggle(card.id)}>
      <Image main={card.images.main} />
        <Footer>
          <Title>{card.name}</Title>
          <LabelWrapper>
            {card.tags?.map((item) => getLabel(item))}
          </LabelWrapper>
        </Footer>
    </Wrapper>
}

export default Card;
const Wrapper = styled.div`
  position: relative;
  background-color: #10151C;
  width: 290px;
  height: 400px;
  margin: auto;
  box-shadow: 1px 4px 10px -1px rgba(0,0,0,0.71);
  &:hover {
    cursor: pointer;
    border: 1px solid orange;
  }
  &:hover > .card__footer {
    animation-name: bounce;
    animation-duration: .5s;
    bottom: 5px;

    @keyframes bounce {
    from {
      bottom: 0;
    }
    to {
      bottom: 5px;
    }
  }
  }
`
const Image = styled.div<{ main: string }>`
  position: relative;
  background-image: url(${props => props.main});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(#ffffff0f, #000000f2);
    width: 100%;
    height: 100%;
  }
`
const Footer = styled.div.attrs({ className: 'card__footer' })`
  position: absolute;
  bottom: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  translate: bottom .4s ease;
`
const Title = styled.h3`
`
const LabelWrapper = styled.div`
  display: flex;
  gap: 5px;
`