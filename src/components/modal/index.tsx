import { modalStatusType } from "hooks/useModal";
import { cards } from "mocks/cards";
import styled from "styled-components"

interface Props {
  modalStatus: modalStatusType; 
}

function Modal({modalStatus}: Props) {
  const card = cards.find((item) => item.id === modalStatus.id)
  return  <Wrapper>
    <ModalBody onMouseDown={(e) => e.nativeEvent.stopImmediatePropagation()}>
      {card ? 
        <Title>{card.name}</Title> 
        
        : null}
    </ModalBody>
  </Wrapper>
}

export default Modal;
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  `
const ModalBody = styled.div`
  position: absolute;
  margin: 0 auto;
  transform: translateY(-50%);
  right: 0;
  left: 0;
  top: 50vh;
  width: 500px;
  aspect-ratio: 1;
  text-align: center;
  background-color: ${props => props.theme.dark.bg.primary};
  color: white;
  border: 1px solid ${props => props.theme.dark.border.primary};
  border-radius: 10px;
`
const Title = styled.h4`
`