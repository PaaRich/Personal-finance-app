import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { useContext,useState } from "react";
import { Context } from "../../context/Context";
import PopUp from "../../components/PopUp";
import {ColorDropdown }from "../Budget/ColorDropdown";

const Layout = () => {
  const { open, openPopUp } = useContext(Context);
  const [budgetAmount, setBudgetAmount] = useState<string>()
  //const [toggleColorDropdown, setToggleColorDropdown] = useState(false);

  
  return (
    <div>
      
 {/* popup */}
      {openPopUp &&
        <PopUp
          label="Add New Budget"
          description="Lorem ipsum dolor sit amet consectetur quod illo enim impedit dolores."
          btnLabel="Add Budget"
          submitFn={() => console.log("New Budget Created")}>
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
          <input className="w-full rounded-[10px] border-2 outline-0 p-3 mt-2" type="number" placeholder="e.g $200" value={budgetAmount} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setBudgetAmount(e.target.value)}}/>
          </div>
          
          <div>
            <label htmlFor="category">Theme</label>
            <ColorDropdown />
          </div>
      </PopUp>}
      
      <div className={` ${openPopUp&&" pointer-events-none"} flex relative h-dvh bg-[var(--light-beige)]`}>
      {/* sidebar */}
      <div className={`${open?" w-[320px]":"w-[76px]"} transition-all duration-300 ease-in-out`}>
        <SideBar />
      </div>
        
          {/* pages */}
      <div className={` transition-all duration-300 ease-in-out w-full grow overflow-y-auto`}>
        <div className="px-10 pb-5"><Outlet /></div>
      </div>
    </div>
    </div>
    
  )
}

export default Layout