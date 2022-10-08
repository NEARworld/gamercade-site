import { cards } from "mocks/cards";
import styled from "styled-components";
import devices from "styles/device";
import Card from "./Card";

function GameList() {
    return <GameListWrapper>
    {cards.map((item) => <Card key={item.id} name={item.name} images={item.images} labels={item.tags} />)}
    {Array.from({ length: 30 }).map(() => <Card name={''} images={{ main: '', sub: [''] }} />)}
  </GameListWrapper>
}
export default GameList;

const GameListWrapper = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 50px;
  @media ${devices.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.laptopL} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1855px) {
    grid-template-columns: repeat(6, 1fr);
  }
`