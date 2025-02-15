import PopUp from "../../components/PopUp";
import { useContext,useMemo, useState} from "react";
import { Context } from "../../context/Context";

const AddMoney = ({ potName, amount, target }: { amount: number; target: number; potName: string }) => {
    const { setOpenAddMoney } = useContext(Context);
    const [addedAmount, setAddedAmount] = useState<number>(0);

    const oldAmountPercent:number = useMemo(() => {
        return Number(((amount / target) * 100).toFixed(2));
    }, [amount,target])
    
    const addedAmountPercent=useMemo(() => {
        return Number(((addedAmount/target)*100).toFixed(2))
    }, [addedAmount,target])
  return (
      <PopUp
      label={`Add to "${potName}"`}
          description="Lorem ipsum dolor sit amet consectetur quod illo enim impedit dolores."
          btnLabel="Confirm Addition"
          submitFn={() => console.log("New Budget Created")}
          closeFn={()=>setOpenAddMoney(false)}
      >
          <div>
              <div className="flex items-center justify-between">
                  <p className="text-[18px] font-medium text-[var(--mid-grey)]">New Amount</p>
                  <h1 className="font-bold text-4xl w-[80px] text-center overflow-hidden">{ amount+addedAmount}</h1>
              </div>

              <div className="my-4">
                  <div className="w-full rounded-[10px] bg-[var(--light-beige)] h-2 relative overflow-hidden">
                      <div style={{width:`${oldAmountPercent+addedAmountPercent}%`}} className="flex items-center h-2 absolute top-[50%] left-0 -translate-y-[50%] rounded-[10px]">
                          <p style={{width:`${oldAmountPercent}%`}} className="mr-[3px] rounded-l-[10px] h-full bg-black"></p>
                          <p style={{width:`${addedAmountPercent}%`}} className="rounded-r-[10px] h-full bg-[var(--green)]"></p>
                      </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                      <p>{oldAmountPercent+addedAmountPercent}%</p>
                      <p>Target of ${ target}</p>
                  </div>
              </div>

              <div>
                  <label htmlFor="" className="font-medium text-[var(--mid-grey)]">Amount to Add</label>
                  <input className="w-full outline-0 border-2 rounded-[10px] p-3" type="number" min={1} max={target-amount}  placeholder="eg. 200" value={addedAmount} onChange={(e)=>{setAddedAmount(Number(e.target.value))}}/>
              </div>
          </div>
      </PopUp>
  )
}

export default AddMoney