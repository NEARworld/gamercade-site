import { modalStatusType } from "hooks/useModal";
import { cards } from "mocks/cards";
import { useEffect, useState } from "react";
import styled from "styled-components"
import Left from "./Left";
import Right from "./Right";

interface Props {
  modalStatus: modalStatusType; 
}

function Modal({modalStatus}: Props) {
  const card = cards.find((item) => item.id === modalStatus.id)
  return  <Wrapper>
    {card ? 
      <ModalBody onMouseDown={(e) => {
        e.nativeEvent.stopImmediatePropagation()}
      }>
          <Left images={card.images} />
          <Right />
      </ModalBody>
      : null}
  </Wrapper>
}

export default Modal;
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalBody = styled.div`
  max-width: 80%;
  text-align: center;
  background-color: ${props => props.theme.dark.bg.primary};
  color: white;
  border: 1px solid ${props => props.theme.dark.border.primary};
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 30px;
`
const Title = styled.h4`
`