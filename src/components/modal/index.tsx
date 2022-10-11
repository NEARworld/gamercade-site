import { modalStatusType } from "hooks/useModal";
import { cards } from "mocks/cards";
import { useEffect, useState } from "react";
import styled from "styled-components"

interface Props {
  modalStatus: modalStatusType; 
}

function Modal({modalStatus}: Props) {
  const [topDistance, setTopDistance] = useState(window.scrollY);
  function handleScroll() {
    setTopDistance(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  const card = cards.find((item) => item.id === modalStatus.id)
  return  <Wrapper>
    <ModalBody onMouseDown={(e) => {
      e.nativeEvent.stopImmediatePropagation()}
    }
      topDistance={topDistance}
    >
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
const ModalBody = styled.div<{topDistance: number}>`
  position: absolute;
  margin: 0 auto;
  transform: translateY(calc(${props => props.topDistance+'px'} + 50%));
  left: 0;
  right: 0;
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