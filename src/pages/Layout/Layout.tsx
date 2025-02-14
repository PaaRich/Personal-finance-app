import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { useContext } from "react";
import { Context } from "../../context/Context";
import EditBudget from "../../components/EditBudget";
import DeletePopUp from "../../components/DeletePopUp";
import AddBudget from "../../components/AddBudget";
import AddPot from "../../components/AddPot";
import EditPot from "../../components/EditPot";
import AddMoney from "../Pots/AddMoney";
import Withdraw from "../Pots/Withdraw";


const Layout = () => {
  const { open, openPopUp,openPot,openEditPopUp,openDelBudget,setOpenDelBudget,openEditPot,openDelPot,setOpenDelPot,openAddMoney,openWithdraw } = useContext(Context);

  //const [toggleColorDropdown, setToggleColorDropdown] = useState(false);

  
  return (
    

      
      <div className=" flex relative h-dvh bg-[var(--light-beige)]">
      {/* sidebar */}
      <div className={`${open?" w-[320px]":"w-[76px]"} transition-all duration-300 ease-in-out`}>
        <SideBar />
      </div>

            
 {/* popup */}
      {openPopUp && <AddBudget/>}
      
      {openEditPopUp && <EditBudget />}
      
      {openDelBudget && <DeletePopUp label="Entertainment" type="budget" setClose={setOpenDelBudget}/>}
      
      {openPot && <AddPot />}
      
      {openEditPot && <EditPot />}
      
      {openDelPot && <DeletePopUp label="Savings" type="pot" setClose={setOpenDelPot} />}
      
      {openAddMoney && <AddMoney amount={455} target={2000} potName="Entertainment" />}
      
      {openWithdraw && <Withdraw amount={50} target={100} potName="Savings"/>}
        
          {/* pages */}
      <div className={` transition-all duration-300 ease-in-out w-full grow overflow-y-auto`}>
        <div className="px-10 pb-5"><Outlet /></div>
      </div>
    </div>
   
    
  )
}

export default Layout