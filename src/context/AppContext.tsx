import { Context } from "./Context";
import { useState } from "react";


  const dataForChart = [
  { name: "Entertainment", value: 50, color: "#0088A9" },
  { name: "Bills", value: 750, color: "#6EC1E4" },
  { name: "Dining Out", value: 75, color: "#E9BFA5" },
  { name: "Personal Care", value: 100, color: "#5B5A71" },
];
export const AppContext = ({ children }: React.PropsWithChildren) => {
  
  const [open, setOpen] = useState<boolean>(true);
  const [openPopUp, setOpenPopUp] = useState<boolean>(false)
  const [openEditPopUp, setOpenEditPopUp] = useState<boolean>(false);
  const [openEditPot, setOpenEditPot] = useState<boolean>(false);
  const [openDelPot, setOpenDelPot] = useState<boolean>(false);
  const [openDelBudget, setOpenDelBudget] = useState<boolean>(false);
  const [openPot, setOpenPot] = useState<boolean>(false);
  const [openAddMoney, setOpenAddMoney] = useState(false);
  const [openWithdraw, setOpenWithdraw] = useState(false);

  // progressbar
  // const [progress, setProgress] = useState(0);
  

  
  return (
      <Context.Provider value={{
      open,
      setOpen,
      openPopUp,
      setOpenPopUp,
      openEditPopUp,
      setOpenEditPopUp,
      openDelBudget,
      setOpenDelBudget,
      openPot,
      setOpenPot,
      openEditPot,
      setOpenEditPot,
      openDelPot,
      setOpenDelPot,
      openAddMoney,
      setOpenAddMoney,
      openWithdraw,
      setOpenWithdraw,
      dataForChart,
      
      }}>
          {children}
      </Context.Provider>
  )
}
