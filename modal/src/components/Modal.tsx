import React, { ReactNode } from "react";
import styled from "@emotion/styled/macro";
import { CSSTransition } from "react-transition-group";

import Portal from "./Portal";

const Overay = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  max-width: 456px;
  position: relative;
  width: 100%;
`;

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  selector?: string;
}

const Modal = ({ children, isOpen, onClose, selector }: Props): JSX.Element => {
  return (
    <CSSTransition in={isOpen} timeout={0} classNames="modal" unmountOnExit>
      <Portal selector={selector}>
        <Overay>
          <Dim onClick={onClose} />
          <Container>{children}</Container>
        </Overay>
      </Portal>
    </CSSTransition>
  );
};

export default Modal;
