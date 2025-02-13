import { SlClose } from "react-icons/sl";
import { useContext } from "react";
import { Context } from "../context/Context";

const PopUp = ({ label, btnLabel, children, submitFn, description }: { description:string; label: string; btnLabel: string; children: React.ReactNode; submitFn: () => void }) => {
    const { setOpenPopUp } = useContext(Context);

  return (
      <div className="w-[560px] bg-white rounded-2xl p-5 z-50 absolute top-[50%] left-[50%] translate-[-50%]">
          {/* nav */}
          <div className="flex items-center justify-between mb-5 mt-2">
              <h1 className="font-bold text-4xl">{label}</h1>
                <SlClose className="cursor-pointer" size={26} onClick={()=>{setOpenPopUp(false)}}/>
          </div>
          <p className="mb-5 text-[18px] text-[var(--mid-grey)]">{ description}</p>
          <form>
              {children}
          </form>
          <button className="w-full rounded-[10px] hover:opacity-80 cursor-pointer bg-black text-white font-bold py-4 mt-5" onClick={submitFn}>{ btnLabel}</button>
    </div>
  )
}

export default PopUp