
import { NavLink } from "react-router-dom";
const BottomNavLink = ({title,icon,path}:{title:string,icon:React.ReactNode,path:string}) => {
  return (
    
                  <NavLink to={path} className="relative flex flex-col items-center justify-center rounded-t-2xl p-2 w-[15%]">
                      {icon}
                    <p className="text-ellipsis text-nowrap hidden sm:block">{ title}</p>
                  </NavLink>
              
  )
}

export default BottomNavLink