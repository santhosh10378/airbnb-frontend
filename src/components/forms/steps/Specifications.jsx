import { MinusIcon, PlusIcon } from "../../../assets";
import { useNewPropertyForm } from "../../../context/NewPropertyFormProvider";
import Button from "../../elements/Button";

const items = [
  {
    label: "Number of Bedrooms",
    description:
      "Detail the number of bedrooms to showcase the space available for your guests.",
    type: "noOfBedrooms",
  },
  {
    label: "Number of Beds",
    description: "Specify the number of beds available in your property.",
    type: "noOfBeds",
  },
  {
    label: "Number of Bathrooms",
    description:
      "Provide information on the number of bathrooms for convenience.",
    type: "noOfBathrooms",
  },
  {
    label: "Number of Adults",
    description: "Specify how many adults can be accommodated.",
    type: "noOfAdults",
  },
  {
    label: "Number of Children",
    description: "Specify how many children can be accommodated.",
    type: "noOfChildren",
  },
  {
    label: "Number of Infants",
    description: "Specify how many infants can be accommodated.",
    type: "noOfInfants",
  },
];

const Specifications = () => {
  const { formData, updateForm } = useNewPropertyForm();

  const handleChange = (type, amount) => {
    const newValue = Math.max(0, (formData[type] || 0) + amount);
    updateForm(type, newValue);
  };

  return (
    <div className="bg-white flex flex-col gap-5 cursor-pointer transition">
      <h2>Who’s coming?</h2>

      <div>
        {items.map(({ label, description, type }, i) => (
          <div key={type} className="flex flex-col gap-5">
            {i !== 0 && <hr className="mt-5" />}
            <div className="flex items-center justify-between gap-5">
              <div>
                <h3 className="font-semibold">{label}</h3>
                <p className="text-secondary-500 text-sm">{description}</p>
              </div>

              <div className="flex items-center justify-center gap-3 text-secondary-500">
                <Button
                  onClick={() => handleChange(type, -1)}
                  disabled={(formData[type] || 0) <= 0}
                  variant="secondary-outlined"
                  className="rounded-full p-2"
                >
                  <MinusIcon className="size-3" />
                </Button>

                <div className="w-5 text-secondary-800 text-center">
                  {formData[type] || 0}
                </div>

                <Button
                  onClick={() => handleChange(type, 1)}
                  variant="secondary-outlined"
                  className="rounded-full p-2"
                >
                  <PlusIcon className="size-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specifications;
