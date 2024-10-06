import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const MeetsPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://meet.google.com/ksg-shuf-usg';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-2xl font-bold text-gray-800"
      >
        meet with aditya launching...
      </motion.div>
    </div>
  );
};

export default MeetsPage;