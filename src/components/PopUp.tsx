import { SlClose } from "react-icons/sl";
import { motion } from "framer-motion";
import { ReactElement } from "react";

// import { useContext } from "react";
// import { Context } from "../context/Context";

const PopUp = ({ label, btnLabel, children, submitFn, description, closeFn }: { description: string; label: string; btnLabel: string | ReactElement ; children: React.ReactNode; submitFn: (e: React.FormEvent<HTMLFormElement>) => void; closeFn:()=>void}) => {
    // const { setOpenPopUp } = useContext(Context);

  return (
    <div className="fixed inset-0 z-50 bg-[#00000094] bg-opacity-0 flex justify-center items-center"
        onClick={closeFn}>
      <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
        // className="w-[560px] bg-white rounded-2xl p-5 z-50 absolute top-[50%] left-[50%] translate-[-50%]">
        className="lg:w-[560px] w-[90%] bg-white rounded-2xl p-5 lg:p-7">
          {/* nav */}
          <div className="flex items-center justify-between mb-5 mt-2">
              <h1 className="font-bold text-[24px] lg:text-4xl">{label}</h1>
                <SlClose className="cursor-pointer" size={26} onClick={closeFn}/>
          </div>
          <p className="mb-5 text-[18px] text-[var(--mid-grey)]">{ description}</p>
          <form onSubmit={submitFn}>
            {children}
            <button className="w-full rounded-[10px] hover:opacity-80 cursor-pointer bg-black text-white font-bold py-4 mt-5" type="submit">{ btnLabel}</button>
            {/* <button className="w-full rounded-[10px] hover:opacity-80 cursor-pointer bg-black text-white font-bold py-4 mt-5" onClick={(e:)=>{}}>{ btnLabel}</button> */}
          </form>
          
    </motion.div>
    </div>
      
  )
}

export default PopUp

// import { SlClose } from "react-icons/sl";
// import { AnimatePresence, motion } from "framer-motion";

// const PopUp = ({ label, btnLabel, children, submitFn, description, closeFn }: { description: string; label: string; btnLabel: string; children: React.ReactNode; submitFn: () => void; closeFn:()=>void}) => {
//   return (
//     <AnimatePresence>
//       <div 
//         className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" 
//         onClick={closeFn}
//       >
//         <motion.div
//           onClick={(e) => e.stopPropagation()} 
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           className="w-[560px] bg-white rounded-2xl p-5"
//         >
//           {/* Header */}
//           <div className="flex items-center justify-between mb-5 mt-2">
//             <h1 className="font-bold text-4xl">{label}</h1>
//             <SlClose className="cursor-pointer" size={26} onClick={closeFn} />
//           </div>
          
//           {/* Description */}
//           <p className="mb-5 text-[18px] text-[var(--mid-grey)]">{description}</p>
          
//           {/* Form */}
//           <form>{children}</form>
          
//           {/* Submit Button */}
//           <button 
//             className="w-full rounded-[10px] hover:opacity-80 cursor-pointer bg-black text-white font-bold py-4 mt-5" 
//             onClick={(e) => { e.preventDefault(); submitFn(); }}
//           >
//             {btnLabel}
//           </button>
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default PopUp;
