import PopUp from "./PopUp"
import { ColorDropdown, ColourOption } from "../pages/Budget/ColorDropdown";
import { useContext } from "react";
import { Context } from "../context/Context";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { addPotFunc } from "../../firebase/firestore";
import { useState } from "react";

interface PotValues{
  name: string;
  target: number;
  theme:string
}

const AddPot = () => {
  const { setOpenPot } = useContext(Context);
  const dispatch = useDispatch<AppDispatch>()

  const [potFormValues, setPotFormValues] = useState({
    name: "",
    target:0,
    theme: ""
  } as PotValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const {name,value}=e.target
    setPotFormValues({ ...potFormValues, [name]: value });
  };


  return (
     <PopUp
          label="Add New Pot"
          description="Add a new pot to your budget"
          btnLabel="Add Pot"
          submitFn={(e:React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              console.log("submitted");
              dispatch(addPotFunc(potFormValues))
            }}
          closeFn={()=>setOpenPot(false)}
    >
      <>
        <div>
              <label htmlFor="category">Pot Name</label>
              <input className="w-full border-2 rounded-[10px] p-3 outline-0 cursor-pointer mt-2" type="text" placeholder="eg.Savings.." name="name" onChange={handleChange}/>
          </div>
          
          <div className="my-4">
            <label htmlFor="">Target</label>
          <input className="w-full rounded-[10px] border-2 outline-0 p-3 mt-2" type="number" min="1" placeholder="e.g $200" name="target" onChange={handleChange}/>
          </div>
          
          <div>
          <label htmlFor="category">Theme</label>
          {/* you need to rewatch this code */}
            <ColorDropdown value={potFormValues.theme} onChange={(newValue: ColourOption | null) => setPotFormValues({ ...potFormValues, theme: newValue?.value || "" })}/>
          </div>
      </>
          
        </PopUp>
  )
}

export default AddPot
