import Navbar from "../../components/Navbar/Navbar";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/Person 1.jpg"
import Bill from "./Bill";
import { PiSortAscendingFill } from "react-icons/pi";

const RecurringBills = () => {
  const [search, setSearch] = useState('');
  const [sortValue,setSortValue]=useState('latest')

  return (
    <div>
      <Navbar title="Recurring Bills" />
      
      <div className="flex flex-col lg:flex-row gap-5">

        {/* cards */}
        <div className="flex max-md:flex-col max-md:gap-y-5 lg:flex-col flex-row items-center lg:gap-y-5 gap-x-5 grow-0">

          <div className="flex items-center  md:block bg-black text-white rounded-2xl p-5 w-full lg:w-[337px]  md:h-[190px]">
            <div className="md:mb-10 mr-5 md:mr-0">
              <FaMoneyCheckDollar size={32}/>
            </div>

            <div>
              <p className="text-[16px] mb-2 tracking-wide">Total Bills</p>
              <h1 className="font-bold text-4xl">$383.34</h1>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 w-full lg:w-[337px] h-[190px]">
            <h1 className="font-bold text-[20px] mb-2">Summary</h1>

            <div>

              <div className="py-2 flex items-center justify-between">
                <p className="text-[var(--mid-grey)]">Paid Bills</p>
                <p className="font-bold">4($190.00)</p>
              </div>
              <div className="py-2 border-y-2 border-y-[var(--lighter-grey)] flex items-center justify-between">
                <p className="text-[var(--mid-grey)]">Total Upcoming</p>
                <p className="font-bold">4($190.00)</p>
              </div>
              <div className="py-2 flex items-center justify-between text-red-500">
                <p>Due soon</p>
                <p className="font-bold">4($190.00)</p>
              </div>
            </div>
          </div>
        </div>


        {/* table */}
        <div className="grow rounded-2xl bg-white p-5">
          <div className="flex items-center justify-between">
            {/* search */}
            <form action="">
              <div className="flex items-center justify-between p-3 border-2 rounded-[10px] text-[18px]  lg:w-[320px]"><input className="outline-0 w-[90%] " type="text" placeholder="Search bills" value={search} onChange={(e)=>setSearch(e.target.value)}/><AiOutlineSearch size={23} /></div>
            </form>
            
            {/* sort */}
            <div>
              <div className="hidden md:block">
                <label className="mr-3" htmlFor="">Sort by</label>
              <select className="outline-0 border-2 p-3 rounded-[10px] text-[18px]" name="sort" value={sortValue} onChange={e=>setSortValue(e.target.value)}>
                <option value="latest">latest</option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
                <option value="highest">highest</option>
                <option value="lowest">lowest</option>
              </select>
              </div>
              
              {/* sort for phone */}
              <div className="md:hidden">
                <PiSortAscendingFill size={25} color="black"/>
              </div>
            </div>
          </div>

          {/* list */}
          <div className="min-w-[300px] max-md:overflow-x-scroll">
            <table className="w-full mt-10 text-nowrap">
            <thead>
              <tr>
                <td className="pb-3">Bill Title</td>
                <td className="text-right pb-3">Due Date</td>
                <td className="text-right pb-3">Amount</td>
              </tr>
            </thead>
            <tbody>
              <Bill logo={ logo} title="Spark Electric Solutions" dateDue="Monthly-2nd" amount={100} />
              <Bill logo={ logo} title="Spark Electric Solutions" dateDue="Monthly-2nd" amount={100} />
              <Bill logo={ logo} title="Spark Electric Solutions" dateDue="Monthly-2nd" amount={100} />
              <Bill logo={ logo} title="Spark Electric Solutions" dateDue="Monthly-2nd" amount={100} />
            </tbody>
          </table>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default RecurringBills