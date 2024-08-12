import { ChevronLeftIcon } from "../assets";
import Button from "../components/elements/Button";
import PropertyCardFavorite from "../components/property-card/PropertyCardFavorite";
import PropertyAmenities from "../components/Property-details/PropertyAmenities";
import PropertyDescription from "../components/Property-details/PropertyDescription";
import PropertyHostInfo from "../components/property-details/PropertyHostInfo";
import PropertyImagesGrid from "../components/Property-details/PropertyImagesGrid";
import PropertyInfoText from "../components/Property-details/PropertyInfoText";
import PropertyReservation from "../components/property-details/PropertyReservation";
import useFetch from "../hooks/useFetch";
import usePageInfo from "../hooks/usePageInfo";

const PropertyDetails = () => {
  const { goBack, params } = usePageInfo();
  const { data: property } = useFetch(`/properties/${params?.id}`);
  console.log(property);

  return (
    <>
      <section className="flex items-start gap-10 pb-28">
        <div className="flex-[2] flex flex-col gap-5">
          <Button variant="primary-link" className="lg:hidden" onClick={goBack}>
            <ChevronLeftIcon className="size-5" />
          </Button>

          <div className="flex items-end justify-between">
            <h1>{property?.title}</h1>

            <div>
              <PropertyCardFavorite property={property} />
            </div>
          </div>
          <PropertyImagesGrid property={property} />
          <PropertyInfoText property={property} />
          <hr />
          <PropertyHostInfo property={property} />
          <hr />
          <PropertyDescription property={property} />
          <hr />
          <PropertyAmenities property={property} />
        </div>

        <div className="hidden lg:flex flex-[1] sticky top-[110px]">
          <PropertyReservation property={property} />
        </div>
      </section>
    </>
  );
};

export default PropertyDetails;
