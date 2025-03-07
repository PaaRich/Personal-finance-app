import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";
import SmallPotsCard from "./SmallPotsCard";

const PotSummary = () => {

  return (
    <div className="p-3 md:p-5 bg-white rounded-2xl w-full">

      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold tracking-wide">Pots</p>
        <Link className="inline-flex items-center text-[18px] hover:underline" to={'/pots'}>See Details<IoMdArrowDropright color="black" size={25}/></Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-y-5 md:gap-x-5 pt-5">

        <div className="flex items-center gap-x-4 basis-[50%] bg-[var(--light-beige)] p-5 rounded-2xl w-full">
          <FaSackDollar color="#277c78" size={30}/>
          <div>
            <p className="text-[var(--mid-grey)] mb-2 text-[16px]">Total Saved</p>
            <h1 className="font-bold text-4xl">${6869 }</h1>
          </div>
        </div>

        <div className="flex gap-x-8 basis-[50%]">

          <div className="flex flex-col gap-y-3">
            <SmallPotsCard color="#277c78" label="Savings" amount="158"/>
            <SmallPotsCard color="#626070" label="Concert Ticket" amount="110"/>
          </div>

          <div className="flex flex-col gap-y-3"> 
            <SmallPotsCard color="#b2c9d7" label="Gift" amount="40"/>
            <SmallPotsCard color="#f2cdac" label="New Laptop" amount="10"/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PotSummary