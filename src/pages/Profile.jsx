import { motion } from "framer-motion";
import { AiOutlineUser } from "react-icons/ai"; // Import a user icon from react-icons

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <AiOutlineUser className="text-indigo-600 text-6xl mb-4" />
      </motion.div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Profile Information Coming Soon!
      </h1>
      <p className="text-lg text-gray-500">
        We’re working on getting your profile details ready. Check back later
        for updates!
      </p>
    </div>
  );
};

export default Profile;
