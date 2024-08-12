import { useState, useEffect } from "react";
import { HeartIcon } from "../../assets";
import useFetch from "../../hooks/useFetch";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";

const PropertyCardFavorite = ({ property }) => {
  const { data } = useFetch(`/wishlists/${property?.id}`);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    setIsFavorited(data?.inWishlist);
  }, [data?.inWishlist]);

  const handleFavorite = async (e) => {
    e.stopPropagation();
    setIsFavorited((prev) => !prev);

    try {
      if (isFavorited) {
        await axiosInstance.delete(`/wishlists/${property?.id}`);
      } else {
        await axiosInstance.post("/wishlists", { propertyId: property?.id });
      }
    } catch (error) {
      toast.error("Something went wrong!");
      setIsFavorited((prev) => !prev);
    }
  };

  const fillColor = isFavorited ? "#E61E4D" : "rgb(0 0 0 / 0.5)";

  return (
    <div onClick={handleFavorite} className="cursor-pointer">
      <HeartIcon
        className="text-white size-6 hover:scale-105 transition"
        fill={fillColor}
      />
    </div>
  );
};

export default PropertyCardFavorite;
