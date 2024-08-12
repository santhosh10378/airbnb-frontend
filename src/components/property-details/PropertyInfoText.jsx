import { StarIcon } from "../../assets";

const PropertyInfoText = ({ property }) => {
  return (
    <div className="flex flex-col gap-2">
      <ul className="font-medium flex items-center gap-1">
        <li className="capitalize">{`${property?.placeType}`}</li>
        <li className="capitalize">{`${property?.propertyType}`}</li>
        <li>{`in`}</li>
        <li className="capitalize">{`${property?.city}, ${property?.country}`}</li>
      </ul>

      <ul className="text-sm text-gray-600 flex items-center gap-2">
        <li className="flex items-center gap-2">
          <span>
            {property?.noOfAdults +
              property?.noOfChildren +
              property?.noOfInfants}{" "}
            guests
          </span>
          <span>·</span>
        </li>
        <li className="flex items-center gap-2">
          <span>{property?.noOfBedrooms} bedrooms</span>
          <span>·</span>
        </li>
        <li className="flex items-center gap-2">
          <span>{property?.noOfBeds} beds</span>
          <span>·</span>
        </li>
        <li className="flex items-center gap-2">
          <span>{property?.noOfBathrooms} bathrooms</span>
        </li>
      </ul>

      {property?.reviews && (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <StarIcon className="size-3" />
            <p className="rating-value">4.5</p>
          </div>
          <p className="underline">
            <span>5 </span>
            <span>reviews</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyInfoText;
