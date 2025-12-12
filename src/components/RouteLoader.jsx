import { motion } from "framer-motion";

export const RouteLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
    >
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Spinner simple - Reemplaza con tu logo */}
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </motion.div> 
  );
};
