import PropertyCard from "../components/property-card/PropertyCard";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";
import { AiOutlineHeart } from "react-icons/ai"; // Import a heart icon from react-icons

const Wishlists = () => {
  const { data, fetchData } = useFetch(`/wishlists`);

  return (
    <div className="h-full space-y-5 p-4">
      {data && data.length > 0 ? (
        <section
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            xl:grid-cols-5 
            2xl:grid-cols-6 
            gap-x-6 
            gap-y-12
            pb-20
          "
        >
          {data.map((wishlist) => (
            <PropertyCard key={wishlist?.id} property={wishlist.property} />
          ))}
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <AiOutlineHeart className="text-red-500 text-6xl mb-4" />
          </motion.div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Your Wishlist is Empty
          </h1>
          <p className="text-lg text-gray-500">
            You haven't added any properties to your wishlist yet. Start
            exploring and add your favorites!
          </p>
        </div>
      )}
    </div>
  );
};

export default Wishlists;
