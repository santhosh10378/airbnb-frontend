import { SettingsIcon } from "../../assets";
import { useModal } from "../../context/ModalContext";
import Button from "../elements/Button";

const Filters = () => {
  const { openModal } = useModal();

  return (
    <Button
      variant="secondary-outlined"
      className="rounded-full md:rounded-xl md:px-5 w-max md:py-4"
      onClick={() => openModal("FiltersModal")}
    >
      <SettingsIcon className="size-5 md:size-4 text-secondary-700" />
      <p className="hidden md:block">Filters</p>
    </Button>
  );
};

export default Filters;
