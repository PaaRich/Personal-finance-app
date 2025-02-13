import Navbar from "../../components/Navbar/Navbar";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/Person 1.jpg"
import Bill from "./Bill";

const RecurringBills = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Navbar title="Recurring Bills" />
      
      <div className="flex gap-5">

        {/* cards */}
        <div className="grow-0">

          <div className="bg-black text-white rounded-2xl p-5 w-[337px]">
            <div className="mb-10">
              <FaMoneyCheckDollar size={32}/>
            </div>

            <div>
              <p className="text-[16px] mb-2 tracking-wide">Total Bills</p>
              <h1 className="font-bold text-4xl">$383.34</h1>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 w-[337px] mt-5">
            <h1 className="font-bold text-[20px] mb-2">Summary</h1>

            <div>

              <div className="py-3 flex items-center justify-between">
                <p className="text-[var(--mid-grey)]">Paid Bills</p>
                <p className="font-bold">4($190.00)</p>
              </div>
              <div className="py-3 border-y-2 border-y-[var(--lighter-grey)] flex items-center justify-between">
                <p className="text-[var(--mid-grey)]">Total Upcoming</p>
                <p className="font-bold">4($190.00)</p>
              </div>
              <div className="py-3 flex items-center justify-between text-red-500">
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
              <div className="flex items-center justify-between p-3 border-2 rounded-[10px] text-[18px] w-[320px]"><input className="outline-0 w-[90%] " type="text" placeholder="Search bills" value={search} onChange={(e)=>setSearch(e.target.value)}/><AiOutlineSearch size={23} /></div>
            </form>
            
            {/* sort */}
            <div>
              <label className="mr-3" htmlFor="">Sort by</label>
              <select className="outline-0 border-2 p-3 rounded-[10px] text-[18px]" name="sort">
                <option selected value="latest">latest</option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
                <option value="highest">highest</option>
                <option value="lowest">lowest</option>
              </select>
            </div>
          </div>

          {/* list */}
          <table className="w-full mt-10">
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
  )
}

export default RecurringBills