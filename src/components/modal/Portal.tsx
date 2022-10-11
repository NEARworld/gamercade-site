import { modalStatusType, toggleType } from 'hooks/useModal';
import React from 'react';
import reactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
  toggle: toggleType;
  modalStatus: modalStatusType;
}

function ModalPortal({ children, toggle, modalStatus }: Props) {
  const modalEl = document.getElementById('modal')!;
  return reactDOM.createPortal(children, modalEl);
}
export default ModalPortal;