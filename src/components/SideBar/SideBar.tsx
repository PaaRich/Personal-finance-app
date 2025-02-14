import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import { LuArrowDownUp } from "react-icons/lu";
import { FaBalanceScaleRight } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { useContext } from "react";
import { Context } from "../../context/Context";

const SideBar = () => {
  const { open, setOpen } = useContext(Context);
  return (
      <nav className={`${styles.sidebar_container} bg-[var(--deep-grey)] h-dvh rounded-r-xl`}>
          
              {/* logo */}
              <div className="p-6 h-[15%]">
                  {open?<h1 className=" text-[var(--lighter-grey)] text-3xl tracking-wider font-extrabold">finance</h1>:<h1 className=" text-[var(--lighter-grey)] text-3xl tracking-wider font-extrabold">F</h1>}
                    
              </div>

              <div className="h-[85%] flex flex-col justify-between">
                {/* taps */}
              <div >
                <ul>
                  <li><NavLink to={'/'}><AiFillHome size={28} className="mr-4"/> <p className={`${open?"w-40":"w-0"} overflow-hidden duration-200`}>Overview</p></NavLink></li>
                  <li><NavLink to='transactions'> <LuArrowDownUp size={28} className="mr-4"/> <p className={`${open?"w-40":"w-0"} overflow-hidden duration-200`}>Transactions</p></NavLink></li>
                  <li><NavLink to='budgets'><FaBalanceScaleRight size={28} className="mr-4"/><p className={`${open?"w-40":"w-0"} overflow-hidden duration-200`}>Budgets</p></NavLink></li>
                  <li><NavLink to='pots'><FaSackDollar size={28} className="mr-4"/><p className={`${open?"w-40":"w-0"} overflow-hidden duration-200`}>Pots</p></NavLink></li>
                  <li><NavLink to='recurring-bills'><FaMoneyCheckDollar size={28} className="mr-4"/><p className={`${open?"w-40":"w-0"} overflow-hidden duration-200 text-nowrap`}>Recurring Bills</p></NavLink></li>
                </ul>
              </div>

                  {/* toggle menu */}
        <div className="p-6 flex items-center text-white opacity-70 cursor-pointer hover:opacity-100 duration-200" onClick={() => setOpen(!open)} >
          <div  className=" mr-4">
            <TbArrowBigLeftLinesFilled className={`${!open&&"rotate-180"} duration-200`}  size={28}  />
          </div>
          
          <p className={`${open?"w-40":"w-0"} overflow-hidden duration-200 font-bold text-nowrap`}>Minimize menu</p>
            </div>
              </div>
              
        
    </nav>
  )
}

export default SideBar