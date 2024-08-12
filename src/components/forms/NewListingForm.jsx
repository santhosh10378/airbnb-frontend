import toast from "react-hot-toast";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import Button from "../elements/Button";
import Amenities from "./steps/Amenities";
import BasicInformation from "./steps/BasicInformation";
import Location from "./steps/Location";
import Media from "./steps/Media";
import NearbyActivites from "./steps/NearbyActivites";
import PropertyType from "./steps/PropertyType";
import Specifications from "./steps/Specifications";
import PlaceType from "./steps/PlaceType";
import { useNewPropertyForm } from "../../context/NewPropertyFormProvider";
import { axiosInstance } from "../../config/axiosInstance";
import { useAuth } from "../../context/AuthContext";
import { useModal } from "../../context/ModalContext";

const NewListingForm = () => {
  const steps = [
    <BasicInformation />,
    <PropertyType />,
    <PlaceType />,
    <Specifications />,
    <Location />,
    <Amenities />,
    <NearbyActivites />,
    <Media />,
  ];
  const { currentStep, nextStep, prevStep, isLastStep, isFirstStep, goToStep } =
    useMultiStepForm(steps.length);
  const { formData } = useNewPropertyForm();
  const { user } = useAuth();
  const { openModal } = useModal();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      openModal("LoginModal");
    }

    const { images, media, ...other } = formData;
    console.log("formData", formData);

    if (!other.title || !other.description || !other.price) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Convert numeric fields to numbers and validate
    const numericFields = [
      "price",
      "noOfBedrooms",
      "noOfBathrooms",
      "noOfBeds",
      "noOfAdults",
      "noOfChildren",
      "noOfInfants",
      "latitude",
      "longitude",
    ];

    numericFields.forEach((field) => {
      if (other[field]) {
        const value = parseFloat(other[field]);
        if (isNaN(value) || value < 0) {
          toast.error(`Invalid value for ${field}.`);
          return;
        }
        other[field] = value;
      }
    });

    // Create FormData object
    const formDataToSend = new FormData();
    for (const key in other) {
      // Append array fields directly
      if (Array.isArray(other[key])) {
        other[key].forEach((item) => formDataToSend.append(key, item));
      } else {
        formDataToSend.append(key, other[key]);
      }
    }

    // Append images if they exist
    if (images && images.length > 0) {
      images.forEach((image) => formDataToSend.append("images", image));
    }

    try {
      const response = await axiosInstance.post("/properties", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("New Listing Form Submitted", response.data);
      toast.success("Property listed successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="border-t w-full flex flex-col justify-between  h-full"
    >
      <div className="flex-[1] p-6 overflow-y-auto scrollbar-hidden">
        {steps[currentStep]}
      </div>
      <div className="flex-[0.1] pb-[72px] px-6 pt-5 flex flex-col gap-5 border-t border-secondary-300 ">
        <div className="hidden md:flex items-center w-full justify-center gap-5 flex-wrap h-full">
          {steps.map((step, i) => (
            <Button
              key={i}
              variant={
                currentStep === i ? "secondary-gradient" : "secondary-outlined"
              }
              onClick={() => goToStep(i)}
              className="p-2 rounded-full px-5"
            >
              {i + 1}
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-between gap-5 w-full h-full">
          {!isFirstStep && (
            <Button
              className="w-full"
              onClick={prevStep}
              variant="primary-outlined"
            >
              Back
            </Button>
          )}
          {!isLastStep && (
            <Button className="w-full" onClick={nextStep}>
              Next
            </Button>
          )}
          {isLastStep && (
            <Button className="w-full" type="submit">
              Submit
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default NewListingForm;
