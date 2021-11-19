import React, { useState } from "react";
import styled from "@emotion/styled/macro";

import Modal from "./components/Modal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
  width: 280px;
  height: 60px;
  margin: 0;
  color: #fff;
  font-size: 24px;
  border: none;
  border-radius: 12px;
  background-color: #3d6afe;

  &:active {
    opacity: 0.8;
  }
`;

const ModalBody = styled.div`
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
  max-height: calc(100vh - 16px);
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
`;

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Button onClick={handleOpen}>OPEN</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalBody>
          <h2>Title</h2>
          <p>Description</p>
        </ModalBody>
      </Modal>
    </Container>
  );
}

export default App;
