import PopUp from "./PopUp"
import { ColorDropdown } from "../pages/Budget/ColorDropdown";
import { useContext } from "react";
import { Context } from "../context/Context";

const EditPot = () => {
    const { setOpenEditPot} = useContext(Context);
  return (
     <PopUp
          label="Edit Pot"
          description="Lorem ipsum dolor sit amet consectetur quod illo enim impedit dolores."
          btnLabel="Save Changes"
          submitFn={() => console.log("Pot Edit")}
          closeFn={()=>setOpenEditPot(false)}
        >
          <div>
              <label htmlFor="category">Pot Name</label>
              <input className="w-full border-2 rounded-[10px] p-3 outline-0 cursor-pointer mt-2" type="text" placeholder="eg.Savings.." />
          </div>
          
          <div className="my-4">
            <label htmlFor="">Target</label>
          <input className="w-full rounded-[10px] border-2 outline-0 p-3 mt-2" type="number" min="1" placeholder="e.g $200"/>
          </div>
          
          <div>
            <label htmlFor="category">Theme</label>
            <ColorDropdown />
          </div>
        </PopUp>
  )
}

export default EditPot