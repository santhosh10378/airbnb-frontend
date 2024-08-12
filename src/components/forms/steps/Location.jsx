import { useNewPropertyForm } from "../../../context/NewPropertyFormProvider";

const InputField = ({ label, value, onChange, type = "text" }) => (
  <div>
    <p className="text-secondary-900 text-sm">{label}</p>
    <input
      type={type}
      className="w-full mt-1 border-2 rounded-lg p-2 outline-none"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Location = () => {
  const { formData, updateForm } = useNewPropertyForm();

  const handleInputChange = (field) => (value) => {
    updateForm(field, value);
  };

  return (
    <div className="space-y-5">
      <div>
        <h3>Define Your Property Location</h3>
        <p className="text-secondary-600 text-sm">
          Fill in the details to accurately pinpoint where your property is
          located.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <InputField
          label="Country"
          value={formData.country}
          onChange={handleInputChange("country")}
        />
        <InputField
          label="State"
          value={formData.state}
          onChange={handleInputChange("state")}
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <InputField
          label="City"
          value={formData.city}
          onChange={handleInputChange("city")}
        />

        <InputField
          label="ZipCode"
          value={formData.zipCode}
          onChange={handleInputChange("zipCode")}
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <InputField
          label="Latitude"
          value={formData.latitude}
          onChange={handleInputChange("latitude")}
          type="number"
        />
        <InputField
          label="Longitude"
          value={formData.longitude}
          onChange={handleInputChange("longitude")}
          type="number"
        />
      </div>

      <InputField
        label="Address"
        value={formData.address}
        onChange={handleInputChange("address")}
      />
    </div>
  );
};

export default Location;
