const PropertyImagesGrid = ({ property }) => {
  const images = property?.images || [];

  return (
    <>
      {images.length > 0 ? (
        <>
          <div className="hidden w-full h-[350px] md:flex items-center gap-4">
            <div className="flex-[2] w-full h-full">
              <img
                src={images[0]}
                alt="Property image"
                className="rounded-xl object-cover w-full h-full"
              />
            </div>

            <div className="flex-[0.7] w-full h-full grid grid-cols-1 grid-rows-3 gap-3">
              {images.slice(1, 4).map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="Property image"
                  className="rounded-xl object-cover w-full h-full"
                />
              ))}
            </div>
          </div>

          <div className="md:hidden w-full h-[350px] overflow-hidden">
            <img
              src={images[0]}
              alt="Property image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </>
      ) : (
        <p>No images available</p> // Fallback message or placeholder
      )}
    </>
  );
};

export default PropertyImagesGrid;
