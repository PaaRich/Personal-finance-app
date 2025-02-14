import PopUp from "../../components/PopUp";
import { useContext,useState,useMemo } from "react";
import { Context } from "../../context/Context";

const Withdraw = ({ potName, amount, target }: { amount: number; target: number; potName: string }) => {
    const { setOpenWithdraw } = useContext(Context);
    const [minusAmount, setMinusAmount] = useState<number>(0);
    
        const oldAmountPercent:number = useMemo(() => {
            return Number(((amount / target) * 100).toFixed(2));
        }, [amount,target])
        
        const addedAmountPercent=useMemo(() => {
            return Number(((minusAmount/target)*100).toFixed(2))
        }, [minusAmount,target])
  return (
      <PopUp
      label={`Withdraw from "${potName}"`}
          description="Lorem ipsum dolor sit amet consectetur quod illo enim impedit dolores."
          btnLabel="Confirm Withdrawal"
          submitFn={() => console.log("New Budget Created")}
          closeFn={()=>setOpenWithdraw(false)}
      >
          <div>
              <div className="flex items-center justify-between">
                  <p className="text-[18px] font-medium text-[var(--mid-grey)]">New Amount</p>
                  <h1 className="font-bold text-4xl w-[80px] text-center overflow-hidden">{ amount-minusAmount}</h1>
              </div>

              <div className="my-4">
                  <div className="w-full rounded-[10px] bg-[var(--light-beige)] h-2 relative overflow-hidden">
                      <div style={{width:`${oldAmountPercent-addedAmountPercent}%`}} className="flex items-center h-2 absolute top-[50%] left-0 -translate-y-[50%] rounded-[10px] ">
                          <p style={{width:`${oldAmountPercent}%`}} className="mr-[3px] rounded-l-[10px] h-full bg-black"></p>
                          <p style={{width:`${addedAmountPercent}%`}} className="rounded-r-[10px] h-full bg-red-500"></p>
                      </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                      <p>{oldAmountPercent-addedAmountPercent}%</p>
                      <p>Target of ${ target}</p>
                  </div>
              </div>

              <form action="">
                  <label htmlFor="" className="font-medium text-[var(--mid-grey)]">Amount to Add</label>
                  <input className="w-full outline-0 border-2 rounded-[10px] p-3" type="number" min={1}  placeholder="eg. 200" value={minusAmount} onChange={(e)=>{setMinusAmount(Number(e.target.value))}}/>
              </form>
          </div>
      </PopUp>
  )
}

export default Withdraw;