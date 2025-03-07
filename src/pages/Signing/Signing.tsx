import signInLogo from "../../assets/Group 33.svg";
import { Outlet } from "react-router-dom";

const signing = () => {
  return (
    <div className="h-dvh p-5 flex items-center bg-[#f2f3f7] relative">
      <div className="hidden lg:block bg-black text-white py-8 rounded-2xl">
        <p className="pl-5 font-bold text-2xl">finance</p>
        <img className="bg-black rounded-2xl w-[65%]" src={signInLogo} alt="logo" />
        <div className="px-5 mt-5">
          <p className="font-bold text-2xl mb-5">Keep track of your money <br />
            and save for your future.</p>
          <p>Personal finance app puts you in control of your spending.
            Track transactions,set budgets and add to savings pot easily.
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full bg-black text-white py-5 rounded-b-2xl lg:hidden">
        <p className="flex items-center justify-center tracking-wide font-bold text-2xl">finance</p>
      </div>
      <div className="w-full">
        <Outlet/>
      </div>
    </div>
  )
}

export default signing