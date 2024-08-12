import { motion } from "framer-motion";
import { AiOutlineClockCircle } from "react-icons/ai"; // Import a clock icon from react-icons

const Messages = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <AiOutlineClockCircle className="text-green-500 text-6xl mb-4" />
      </motion.div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        This Feature is Coming Soon!
      </h1>
      <p className="text-lg text-gray-500">
        We're working hard to bring this feature to you. Stay tuned for updates!
      </p>
    </div>
  );
};

export default Messages;
