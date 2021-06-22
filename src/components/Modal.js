import { createPortal } from 'react-dom';
import styled from 'styled-components';

export default function Modal({ children }) {
  const modalRoot = document.getElementById('portal');

  return createPortal(<ModalWrapper>{children}</ModalWrapper>, modalRoot);
}

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
