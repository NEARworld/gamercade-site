import GameList from 'components/gamelist';
import Label from 'components/Label';
import { labels } from 'mocks/labels';
import styled from 'styled-components';
import devices from 'styles/device';

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
        labels.map((item) => <Label key={item.id} data={item} />)
      }
    </LabelWrapper>
    <GameList />
  </MainWrapper>
}
export default Main;

const MainWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  `;
const LabelWrapper = styled.div`
  /* background-color: red; */
  margin: 30px auto;
  text-align: center;
  @media ${devices.mobileS} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  @media (min-width: 500px){
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`