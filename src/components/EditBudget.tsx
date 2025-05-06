import PopUp from "./PopUp"
import { useContext } from "react";
import { Context } from "../context/Context";
import { ColorDropdown } from "../pages/Budget/ColorDropdown";

const EditBudget = () => {
  const { setOpenEditPopUp } = useContext(Context);
  return (
    <PopUp
      description="You about to delete this budget"
      label="Edit Budget"
      btnLabel="Save Changes"
      submitFn={() => { console.log("Saved Changes") }}
      closeFn={()=>setOpenEditPopUp(false)}
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
                  <input className="w-full rounded-[10px] border-2 outline-0 p-3 mt-2" type="number" />
                  </div>
                  
                  <div>
                    <label htmlFor="category">Theme</label>
                    <ColorDropdown 
                      value="default-color" 
                      onChange={(value) => console.log("Selected color:", value)} 
                    />
                  </div>
    </PopUp>
  )
}

export default EditBudget;