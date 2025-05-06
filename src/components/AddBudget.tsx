import PopUp from "./PopUp"
import { ColorDropdown } from "../pages/Budget/ColorDropdown";
import { useContext, useState } from "react";
import { addBudgetFunc } from "../../firebase/firestore";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";

type ColourOption = {
  value: string;
  label: string;
};
import { Context } from "../context/Context";

interface BudgetFormValues {
  category: string;
  maxSpend: number;
  theme: string;
  }

const AddBudget = () => {
  const { setOpenPopUp } = useContext(Context);
  const dispatch = useDispatch<AppDispatch>();

  const [budgetFormValues, setBudgetFormValues] = useState({
    category: "",
    maxSpend: 0,
    theme: ""
  } as BudgetFormValues);

  const handleAddBudgetFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBudgetFormValues({ ...budgetFormValues, [name]: value });
  };

  return (
    <PopUp
          label="Add New Budget"
          description="Lorem ipsum dolor sit amet consectetur quod illo enim impedit dolores."
          btnLabel="Add Budget"
          submitFn={(e:React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              console.log("submitted");
              dispatch(addBudgetFunc(budgetFormValues))
            }}
          closeFn={()=>setOpenPopUp(false)}
        >
          <div>
            <label htmlFor="category">Budget Category</label>
            <select className="w-full border-2 rounded-[10px] p-3 outline-0 cursor-pointer mt-2" name="category" id="" value={budgetFormValues.category} onChange={handleAddBudgetFormChange}>
              <option value="entertainment">Entertainment</option>
              <option value="bills">Bills</option>
              <option value="groceries">Groceries</option>
              <option value="dinning-out">Dinning Out</option>
              <option value="transportation">Transportation</option>
            </select>
          </div>
          
          <div className="my-4">
            <label htmlFor="">Maximum Spend</label>
          <input className="w-full rounded-[10px] border-2 outline-0 p-3 mt-2" type="number" name="maxSpend" min="1" placeholder="e.g $200" value={budgetFormValues.maxSpend} onChange={handleAddBudgetFormChange}/>
          </div>
          
          <div>
            <label htmlFor="category">Theme</label>
        <ColorDropdown

              value={budgetFormValues.theme} 
              onChange={(newValue: ColourOption | null) => setBudgetFormValues({ ...budgetFormValues, theme: newValue?.value || "" })} 
            />
          </div>
        </PopUp>
  )
}

export default AddBudget