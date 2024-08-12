import { createContext, useState, useContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (name) => {
    setModal(name);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ModalContext.Provider
      value={{ modal, openModal, closeModal, modalContent, setModalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within an ModalProvider");
  }

  const { modal, openModal, closeModal, modalContent, setModalContent } =
    context;

  return { modal, openModal, closeModal, modalContent, setModalContent };
};
