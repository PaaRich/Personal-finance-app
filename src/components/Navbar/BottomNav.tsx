import BottomNavLink from "./BottomNavLink";
// import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { LuArrowDownUp } from "react-icons/lu";
import { FaBalanceScaleRight } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const BottomNav = () => {
  return (
      <div className=" w-full bg-[var(--deep-grey)] h-full rounded-t-2xl px-5 bottom-nav flex items-center justify-between">
          <BottomNavLink path="/overview" title="Overview" icon={<AiFillHome size={28} />} />
          <BottomNavLink path="/transactions" title="Transactions" icon={<LuArrowDownUp size={28} />} />
          <BottomNavLink path="/budgets" title="Budgets" icon={<FaBalanceScaleRight size={28} />} />
          <BottomNavLink path="/pots" title="Pots" icon={<FaSackDollar size={28} />} />
          <BottomNavLink path="/recurring-bills" title="Recurring Bills" icon={<FaMoneyCheckDollar size={28} />} />
          </div>
  )
}

export default BottomNav