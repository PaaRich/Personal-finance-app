import { useState,useMemo} from "react";
import { BsThreeDots } from "react-icons/bs";
import Detail from "../../components/Detail";
import PotButton from "./PotButton";

const PotCard = ({ color, label, target, amountSaved }: { color: string; label: string; target: number;amountSaved:number }) => {
    const [openDetail, setOpenDetail] = useState(false);
    const percent = useMemo(() => Math.floor((amountSaved/target)*100),[amountSaved,target])
  return (
      <div className="bg-white p-5 rounded-2xl">
          {/* nav */}
          <div className="flex items-center justify-between relative">
              <div className="flex items-center">
                <div style={{backgroundColor:`${color}`}} className="h-[20px] w-[20px] rounded-full mr-2" ></div>
                  <p className="text-[21px] font-bold">{ label}</p>
              </div>
              
              <div className="cursor-pointer p-1 rounded-[5px] hover:bg-[whitesmoke] duration-200" onClick={() => setOpenDetail(!openDetail)} >
                  <BsThreeDots />
              </div>
              
              {openDetail&&<Detail setState={setOpenDetail} name="Budget" editFn={()=>console.log('edit')} delFn={()=>console.log("delete")}/>}
          </div>

          {/* body */}
          <div className="mt-10">
              
              <div className="flex items-center justify-between">
                  <p className="text-[18px] text-[var(--deep-grey)]">Total Saved</p>
                  <h1 className="text-[var(--deep-grey)] font-bold text-3xl">${ amountSaved}</h1>
              </div>

              <div className="relative bg-[var(--light-beige)] h-3 rounded-2xl mt-6 mb-4">
                  <div style={{ width:`${percent}%`, backgroundColor:`${color}`}} className="h-3 absolute left-0 top-[50%] translate-y-[-50%] rounded-[5px]"></div>
              </div>

              <div className="flex items-center justify-between">
                  <p className="font-bold">{ percent }%</p>
                  <p className="text-[var(--deep-grey)]">Target of ${ target }</p>
              </div>

              <div className="flex items-center gap-3 mt-10">
                  <PotButton onclick={()=>console.log("add money")} label="+ Add money"/>
                  <PotButton onclick={()=>console.log("withdrawn")} label="Withdraw"/>
              </div>
          </div>
    </div>
  )
}

export default PotCard