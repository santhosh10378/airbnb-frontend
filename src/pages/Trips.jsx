import PropertyCard from "../components/property-card/PropertyCard";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";
import { AiOutlineCalendar } from "react-icons/ai"; // Import a calendar icon from react-icons

const Trips = () => {
  const { data: trips, fetchData } = useFetch("/bookings/user");

  return (
    <div className="h-full space-y-5 p-4">
      {trips && trips.length > 0 ? (
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
          {trips.map((trip) => (
            <PropertyCard
              key={trip?.id}
              property={trip?.property}
              trip={trip}
              fetchData={fetchData}
            />
          ))}
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <AiOutlineCalendar className="text-violet-500 text-6xl mb-4" />
          </motion.div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            No Trips Found
          </h1>
          <p className="text-lg text-gray-500">
            You don't have any upcoming trips. Explore properties and book your
            next adventure!
          </p>
        </div>
      )}
    </div>
  );
};

export default Trips;
