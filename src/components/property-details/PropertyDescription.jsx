import MarkdownPreview from "@uiw/react-markdown-preview";

import { useModal } from "../../context/ModalContext";
import Button from "../elements/Button";

const Body = ({ description }) => {
  return (
    <div className="p-7 pt-14 h-full overflow-y-hidden">
      <div className="h-full overflow-y-hidden">
        <h2 className="font-bold mb-5">About this place</h2>

        <div className="overflow-y-auto h-full">
          <div className="h-96">
            <MarkdownPreview
              source={description}
              style={{ background: "white", color: "black" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyDescription = ({ property }) => {
  const { openModal, setModalContent } = useModal();

  const handleShowMore = () => {
    setModalContent(<Body description={property?.description} />);
    openModal("DescriptionModal");
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="mb-2">About this place</h2>

        <div className="line-clamp-5 prose">
          <MarkdownPreview
            source={property?.description}
            style={{ background: "white", color: "black" }}
          />
        </div>
      </div>

      <Button onClick={handleShowMore} variant="secondary-link">
        Show more
      </Button>
    </div>
  );
};

export default PropertyDescription;
