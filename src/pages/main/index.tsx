import Card, { cards } from 'components/Card';
import Label from 'components/Label';
import styled from 'styled-components';

export interface ILabel {
  id: number;
  bg: string;
  stroke: string;
  text: string;
};

export const labels = [
  {
    id: 1,
    bg: '#3472AA',
    stroke: '#4A90D0',
    text: 'cyberpunk'
  },
  {
    id: 2,
    bg: '#AA3434',
    stroke: '#F54E4E',
    text: 'action'
  },
  {
    id: 3,
    bg: '#AA6634',
    stroke: '#DC8C52',
    text: 'RPG'
  },
  {
    id: 4,
    bg: '#623799',
    stroke: '#9155DD',
    text: 'fantasy'
  },
  {
    id: 5,
    bg: '#AA5134',
    stroke: '#ED7750',
    text: 'history'
  },
  {
    id: 6,
    bg: '#34AA72',
    stroke: '#61E8A8',
    text: 'shooting'
  }
]

function Main() {
  return <MainWrapper>
    <LabelWrapper>
      {
        labels.map((item) => <Label key={item.id} bg={item.bg} stroke={item.stroke} text={item.text} />)
      }
    </LabelWrapper>
    <GameList>
      {cards.map((item) => <Card name={item.name} images={item.images} labels={item.tags} />)}
      {Array.from({ length: 30 }).map(() => <Card name={''} images={{ main: '', sub: [''] }} />)}
    </GameList>
  </MainWrapper>
}
export default Main;

const MainWrapper = styled.div`
  `;
const LabelWrapper = styled.div`
  /* background-color: red; */
  margin: 30px auto;
  width: 1000px;
  display: flex;
  gap: 10px;
  justify-content: center;
`
const GameList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  margin-top: 50px;
`