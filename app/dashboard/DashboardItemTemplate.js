import { motion } from "framer-motion";
import { useEffect } from "react";

function DashboardItem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      Yes
    </motion.div>
  );
}

export default DashboardItem;
