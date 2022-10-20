import { cards } from "mocks/cards";
import Card from "./Card";
import ModalPortal from "components/modal/Portal";
import Modal from "components/modal";
import useModal from "hooks/useModal";
import Styled from "components/styles/Index.styled";

function GameList() {
  const { modalStatus, toggle } = useModal();
  return (
    <Styled.GameList.Wrapper>
      {cards.map((item) => (
        <Card key={item.id} card={item} toggle={toggle} />
      ))}
      <ModalPortal toggle={toggle} modalStatus={modalStatus}>
        {modalStatus.isOpen ? <Modal modalStatus={modalStatus} /> : ""}
      </ModalPortal>
    </Styled.GameList.Wrapper>
  );
}
export default GameList;
