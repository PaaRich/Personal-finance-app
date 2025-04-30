import PopUp from "./PopUp"
import { ColorDropdown } from "../pages/Budget/ColorDropdown";
import { useContext, useState } from "react";

type ColourOption = {
  value: string;
  label: string;
};
import { Context } from "../context/Context";


const AddBudget = () => {
    const { setOpenPopUp } = useContext(Context);
      const [budgetAmount, setBudgetAmount] = useState<string>()
  return (
    <PopUp
          label="Add New Budget"
          description="Lorem ipsum dolor sit amet consectetur quod illo enim impedit dolores."
          btnLabel="Add Budget"
          submitFn={() => console.log("New Budget Created")}
          closeFn={()=>setOpenPopUp(false)}
        >
          <div>
            <label htmlFor="category">Budget Category</label>
            <select className="w-full border-2 rounded-[10px] p-3 outline-0 cursor-pointer mt-2" name="category" id="">
              <option value="entertainment">Entertainment</option>
              <option value="bills">Bills</option>
              <option value="groceries">Groceries</option>
              <option value="dinning-out">Dinning Out</option>
              <option value="transportation">Transportation</option>
            </select>
          </div>
          
          <div className="my-4">
            <label htmlFor="">Maximum Spend</label>
          <input className="w-full rounded-[10px] border-2 outline-0 p-3 mt-2" type="number" min="1" placeholder="e.g $200" value={budgetAmount} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setBudgetAmount(e.target.value)}}/>
          </div>
          
          <div>
            <label htmlFor="category">Theme</label>
            <ColorDropdown 
              value={budgetAmount || ""} 
              onChange={(value: ColourOption | null) => setBudgetAmount(value?.value || "")} 
            />
          </div>
        </PopUp>
  )
}

export default AddBudget