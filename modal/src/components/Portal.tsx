import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  selector?: string;
}

const Portal = ({ children, selector }: Props): JSX.Element => {
  const rootElement = selector && document.getElementById("modal-root");

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
