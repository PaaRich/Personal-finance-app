import { SlClose } from "react-icons/sl";
import { motion } from "framer-motion";


const DeletePopUp = ({ label, type, setClose }: { label: string; type: string;setClose:(v:boolean)=>void }) => {
    
    return (
        <div
            onClick={()=>setClose(false)}
            className="fixed inset-0 z-50 bg-[#00000094] bg-opacity-0 flex justify-center items-center">
            <motion.div
              onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="lg:w-[560px] w-[90%] bg-white rounded-2xl p-5 lg:p-8 z-50 absolute top-[50%] left-[50%] translate-[-50%]">
          
          <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl lg:text-[32px]">Delete '{label}'?</h1>
            <SlClose className="cursor-pointer" size={25} onClick={()=>setClose(false)}/>
          </div>
          
          <p className="my-5 text-[var(--deep-grey)] text-[17px]">Are you sure you want to delete this {type}? This action cannot be reversed 
              and all data inside it would be removed forever.
          </p>

          <div className="flex flex-col">
            <button  className="w-full bg-[#c94736] text-white font-bold py-4 rounded-[8px] cursor-pointer hover:opacity-85 duration-150">Yes,Confirm deletion</button>
            <button onClick={()=>setClose(false)} className="w-full font-bold p-3 mt-2 rounded-[8px] bg-[whitesmoke] opacity-60 duration-150 hover:opacity-100 text-[var(--deep-grey)] cursor-pointer">No,Go Back</button>
          </div>
          
          
    </motion.div>
      </div>
  )
}

export default DeletePopUp