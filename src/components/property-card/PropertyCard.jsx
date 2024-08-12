import { useNavigate } from "react-router-dom";
import PropertyCardActionButtons from "./PropertyCardActionButtons";
import PropertyCardDetails from "./PropertyCardDetails";
import PropertyCardFavorite from "./PropertyCardFavorite";
import PropertyCardImages from "./PropertyCardImages";

const PropertyCard = ({ trip, booking, myProperty, property, fetchData }) => {
  const navigate = useNavigate();
  return (
    <article className="flex flex-col gap-2 relative overflow-hidden cursor-pointer">
      <div className="absolute right-3 top-3 z-10">
        <PropertyCardFavorite property={property} />
      </div>
      <div onClick={() => navigate(`/properties/${property?.id}`)}>
        <PropertyCardImages
          property={property}
          trip={trip}
          booking={booking}
          myProperty={myProperty}
          fetchData={fetchData}
        />
      </div>

      <PropertyCardDetails
        property={property}
        trip={trip}
        booking={booking}
        myProperty={myProperty}
        fetchData={fetchData}
      />
      {(trip || myProperty || booking) && (
        <PropertyCardActionButtons
          property={property}
          trip={trip}
          booking={booking}
          myProperty={myProperty}
          fetchData={fetchData}
        />
      )}
    </article>
  );
};

export default PropertyCard;
