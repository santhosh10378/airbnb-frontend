import NewListingForm from "../../forms/NewListingForm";
import Modal from "../modal-templates/Modal";

const NewListingModal = () => {
  return (
    <Modal title="Airbnb your home">
      <NewListingForm />
    </Modal>
  );
};

export default NewListingModal;
