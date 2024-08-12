import { axiosInstance } from "../../config/axiosInstance";
import usePageInfo from "../../hooks/usePageInfo";
import Button from "../elements/Button";
import { toast } from "react-hot-toast";

const PropertyCardActionButtons = ({
  trip,
  booking,
  myProperty,
  fetchData,
  property,
}) => {
  const { refreshPage } = usePageInfo();
  const cancelTrip = async () => {
    try {
      await axiosInstance.delete(`/bookings/${trip?.id}`);
      toast.success("Cancelled");
      await fetchData();
      refreshPage();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const deleteProperty = async () => {
    try {
      await axiosInstance.delete(`/properties/${property?.id}`);
      toast.success("Deleted");
      await fetchData();
      refreshPage();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {trip && (
        <Button onClick={cancelTrip} className="p-2 w-full">
          Cancel Trip
        </Button>
      )}

      {booking && <Button className="p-2 w-full">Cancel Booking</Button>}

      {myProperty && (
        <>
          {/* <Button variant="secondary-gradient" className="p-2 w-full">
            Update Property
          </Button> */}
          <Button onClick={deleteProperty} className="p-2 w-full">
            Delete Property
          </Button>
        </>
      )}
    </div>
  );
};

export default PropertyCardActionButtons;
