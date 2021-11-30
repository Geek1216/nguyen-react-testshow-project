import { createPortal } from "react-dom";

export const Modal = ({ open, children }) => {
  if (!open) return null;
  return createPortal(
    <div className="modal">{children}</div>,
    document.querySelector("#portal")
  );
};
