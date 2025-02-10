import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

const Layout = () => {
  return (
    <div className={styles.layout_container}>
          {/* sidebar */}
      <div>
        <SideBar/>
          </div>

          {/* pages */}
          <div><Outlet/></div>
    </div>
  )
}

export default Layout