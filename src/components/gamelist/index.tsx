import { cards } from "mocks/cards";
import styled from "styled-components";
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
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-top: 50px;
`