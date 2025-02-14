import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Detail = ({
  editFn,
  delFn,
  name,
  setState,
}: {
  editFn: () => void;
  delFn: () => void;
  name: string;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailRef.current && !detailRef.current.contains(event.target as Node)) {
        setState(false); // Close the component when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setState]);

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="bg-white rounded-2xl p-5 absolute top-6 right-5 shadow-lg z-30"
      ref={detailRef}
    >
      <div
        className="cursor-pointer border-b-2 border-b-[var(--light-grey)] pb-3 hover:text-gray-500"
        onClick={editFn}
      >
        Edit {name}
      </div>
      <div className="pt-3 cursor-pointer text-red-300 hover:text-red-500" onClick={delFn}>
        Delete {name}
      </div>
    </motion.div>
  );
};

export default Detail;
