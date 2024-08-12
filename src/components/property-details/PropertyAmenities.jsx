import { amenities, amenityCategories } from "../../data/dummy";
import { useModal } from "../../context/ModalContext";
import Button from "../elements/Button";
import { twMerge } from "tailwind-merge";

const Body = ({ propertyAmenities }) => {
  // Filter out categories that have at least one amenity
  const filteredCategories = amenityCategories.filter((category) => {
    return amenities
      .filter((a) => propertyAmenities?.includes(a.slug))
      .some((amenity) => amenity.amenityCategoryId === category.id);
  });

  return (
    <div className="p-7 pt-14 h-full overflow-y-hidden">
      <div className="h-full overflow-y-hidden">
        <h2 className="font-bold mb-5">What this place offers</h2>

        <div className="overflow-y-auto h-full">
          <div>
            {filteredCategories.map((category, i) => (
              <div
                key={category.slug}
                className={twMerge(i === 0 ? "mt-0" : "mt-10")}
              >
                <h3 className="mb-1">{category.name}</h3>
                <div>
                  {amenities
                    ?.filter((a) => propertyAmenities?.includes(a.slug))
                    .filter(
                      (amenity) => amenity.amenityCategoryId === category.id
                    )
                    .map((amenity) => (
                      <div
                        key={amenity.slug}
                        className="flex items-center gap-2 text-gray-600 py-4 border-b"
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: amenity.icon }}
                        />
                        <p>{amenity.name}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyAmenities = ({ property }) => {
  const { openModal, setModalContent } = useModal();

  const handleShowAllAmenities = () => {
    setModalContent(<Body propertyAmenities={property?.amenities} />);
    openModal("AmenitiesModal");
  };

  return (
    <div className="flex flex-col gap-7">
      <div>
        <h2 className="mb-4">What this place offers</h2>

        <div className="grid grid-cols-2 gap-4">
          {amenities
            ?.filter((a) => property?.amenities?.includes(a.slug))
            .slice(0, 10)
            .map((amenity) => (
              <div
                key={amenity.slug}
                className="flex items-center gap-2 text-gray-700"
              >
                <div dangerouslySetInnerHTML={{ __html: amenity.icon }} />
                <p className="truncate">{amenity.name}</p>
              </div>
            ))}
        </div>
      </div>

      <Button
        onClick={handleShowAllAmenities}
        variant="primary-outlined"
        className="w-max px-8"
      >
        Show all amenities
      </Button>
    </div>
  );
};

export default PropertyAmenities;
