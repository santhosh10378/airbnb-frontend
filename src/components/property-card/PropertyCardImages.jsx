const PropertyCardImages = ({ property }) => {
  return (
    <>
      <div className="w-full rounded-2xl overflow-hidden">
        <img
          src={property?.images[0]}
          alt="property image"
          loading="lazy"
          className="w-full aspect-square object-cover"
        />
      </div>
    </>
  );
};

export default PropertyCardImages;
