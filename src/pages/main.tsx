import GameList from 'components/gamelist';
import Label from 'components/Label';
import { labels } from 'mocks/labels';
import styled from 'styled-components';

export interface ILabel {
  id: number;
  bg: string;
  stroke: string;
  text: string;
};

function Main() {
  return <MainWrapper>
    <LabelWrapper>
      {
        labels.map((item) => <Label key={item.id} bg={item.bg} stroke={item.stroke} text={item.text} />)
      }
    </LabelWrapper>
    <GameList />
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