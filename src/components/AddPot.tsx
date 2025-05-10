import PopUp from "./PopUp"
import { ColorDropdown, ColourOption } from "../pages/Budget/ColorDropdown";
import { useContext } from "react";
import { Context } from "../context/Context";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { addPotFunc } from "../../firebase/firestore";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

interface PotValues{
  name: string;
  target: number;
  theme:string
}

const AddPot = () => {
  const { setOpenPot } = useContext(Context);
  const dispatch = useDispatch<AppDispatch>()
  const [loading, setLoading] = useState(false);
  const [potFormValues, setPotFormValues] = useState({
    name: "",
    target: 0,
    //the theme must have a default value
    theme: "blue"
  } as PotValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const {name,value}=e.target
    setPotFormValues({ ...potFormValues, [name]: value });
  };


  return (
     <PopUp
          label="Add New Pot"
          description="Add a new pot to your budget"
          btnLabel={loading?<BeatLoader/>:"Add Pot"}
          submitFn={async (e:React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
            setLoading(true)
            try {
              await dispatch(addPotFunc(potFormValues))
              setLoading(false)
              setPotFormValues({
                name: "",
                target:0,
                theme: ""
              } as PotValues)
            } catch (error) {
              console.log(error)
            }
            }}
          closeFn={()=>setOpenPot(false)}
    >
      <>
        <div>
              <label htmlFor="category">Pot Name</label>
              <input className="w-full border-2 rounded-[10px] p-3 outline-0 cursor-pointer mt-2" type="text" placeholder="eg.Savings.." name="name" required onChange={handleChange}/>
          </div>
          
          <div className="my-4">
            <label htmlFor="">Target</label>
          <input className="w-full rounded-[10px] border-2 outline-0 p-3 mt-2" type="number" min="1" placeholder="e.g $200" name="target" required onChange={handleChange}/>
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
