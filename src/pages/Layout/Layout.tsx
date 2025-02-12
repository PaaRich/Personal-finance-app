import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Layout = () => {
  const {open,setOpen } = useContext(Context);
  return (
    <div className={styles.layout_container}>
      {/* sidebar */}
      <div className={`${open?"w-[320px]":"w-[76px]"} transition-all duration-300 ease-in-out`}>
        <SideBar />
      </div>
        
         

          {/* pages */}
      <div className={` transition-all duration-300 ease-in-out w-full grow overflow-y-auto`}>
        <div className="px-10"><Outlet /></div>
      </div>
    </div>
  )
}

export default Layout