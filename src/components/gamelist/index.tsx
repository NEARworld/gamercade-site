import { cards } from "mocks/cards";
import styled from "styled-components";
import { devices } from "styles/global";
import Card from "./Card";
import ModalPortal from "components/modal/Portal";
import Modal from "components/modal";
import useModal from 'hooks/useModal';

function GameList() {
  const {modalStatus, toggle} = useModal();
  return <GameListWrapper>
    {cards.map((item) => <Card key={item.id} card={item} toggle={toggle} />)}
    <ModalPortal toggle={toggle} modalStatus={modalStatus}>
      {modalStatus.isOpen ? <Modal modalStatus={modalStatus} /> : ''}
    </ModalPortal>
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