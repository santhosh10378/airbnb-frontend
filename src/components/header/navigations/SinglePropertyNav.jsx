import Container from "../../../layouts/Container";
import Button from "../../elements/Button";
import { formatCurrency } from "../../../utils/formatters";
import { useModal } from "../../../context/ModalContext";

const SinglePropertyNav = () => {
  const { openModal } = useModal();

  return (
    <div className="lg:hidden fixed bg-white z-10 bottom-0 left-0 w-full h-[65px] border-t">
      <Container>
        <div
          onClick={() => openModal("ReservationModal")}
          className="h-full w-full flex items-center justify-between"
        >
          <div>
            <p>
              <span className="font-semibold text-lg text-secondary-800">
                {formatCurrency({ amount: 2500 })}
              </span>
              &nbsp;
              <span className="text-secondary-600 text-sm">night</span>
            </p>
          </div>
          <Button variant="primary-gradient" className="px-7">
            Reserve
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SinglePropertyNav;
