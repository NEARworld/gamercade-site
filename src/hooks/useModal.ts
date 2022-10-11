import { useEffect, useState } from "react";

export type toggleType = (id: number) => void;
export type modalStatusType = { id: number; isOpen: boolean };

function useModal() {
  const [modalStatus, setModalStatus] = useState({ id: 0, isOpen: false });
  const modalEl = document.getElementById('modal')!;
  function handler () {
    modalEl.style.display = 'none';
    setModalStatus((prevState) => ({...prevState, isOpen: !modalStatus.isOpen }));
  }
  useEffect(() => {
    if (modalStatus.id !== 0) modalEl.addEventListener("mousedown", handler);
    if(modalStatus.isOpen) modalEl.style.display = 'block';

    return () => {
      modalEl.removeEventListener('mousedown', handler)
    }
  }, [modalStatus.isOpen]);
  function toggle(id: number) {
    setModalStatus({id , isOpen: !modalStatus.isOpen });
  }
  return {
    modalStatus,
    toggle,
  };
}
export default useModal;
