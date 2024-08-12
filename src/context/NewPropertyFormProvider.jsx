import { createContext, useContext, useState } from "react";

const NewPropertyFormContext = createContext();

export const NewPropertyFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    propertyType: "",
    placeType: "entire",
    noOfBedrooms: 0,
    noOfBathrooms: 0,
    noOfBeds: 0,
    noOfAdults: 0,
    noOfChildren: 0,
    country: "",
    state: "",
    city: "",
    address: "",
    zipCode: "",
    latitude: "",
    longitude: "",
    amenities: [],
    nearbyActivities: [],
    media: [],
    images: [],
  });

  const updateForm = (key, newData) => {
    setFormData((prev) => {
      return {
        ...prev,
        [key]: newData,
      };
    });
  };

  return (
    <NewPropertyFormContext.Provider value={{ formData, updateForm }}>
      {children}
    </NewPropertyFormContext.Provider>
  );
};

export const useNewPropertyForm = () => {
  const context = useContext(NewPropertyFormContext);
  if (!context) {
    throw new Error(
      "useNewPropertyForm must be used within a NewPropertyFormProvider"
    );
  }
  const { formData, updateForm } = context;

  return { formData, updateForm };
};
