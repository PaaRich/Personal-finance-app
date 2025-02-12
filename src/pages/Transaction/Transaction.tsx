import Navbar from "../../components/Navbar/Navbar";
import TransactionDetail from "./TransactionDetail";
import profilePic from "../../assets/Person 1.jpg"
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Transaction = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <Navbar title="Transaction"/>
      <div className="bg-white rounded-2xl px-8 py-5">
        <div className="flex items-center justify-between mb-10">
          <form action="">
            <div className="flex items-center justify-between p-3 border-2 rounded-[10px] text-[18px] w-[320px]"><input className="outline-0 w-[90%] " type="text" placeholder="Search transaction" value={search} onChange={(e)=>setSearch(e.target.value)}/><AiOutlineSearch size={23} /></div>
          </form>

          <div className="flex items-center gap-x-6">
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

            {/* filter */}
           <div>
              <label className="mr-3" htmlFor="">Category</label>
              <select className="outline-0 border-2 p-3 rounded-[10px] text-[18px]" name="category">
                <option selected value="all transactions">All transactions</option>
                <option value="entertainment">Entertainment</option>
                <option value="bills">Bills</option>
                <option value="groceries">Groceries</option>
                <option value="dining Out">Dining Out</option>
                <option value="Transportation">Transportation</option>
              </select>
            </div>
          </div>
         
          
        </div>
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <td className="text-left pb-5 text-[var(--mid-grey)]">Recipient/Sender</td>
                <td className="text-center pb-5 text-[var(--mid-grey)]">Category</td>
                <td className="text-center pb-5 text-[var(--mid-grey)]">Transaction Date</td>
                <td className="text-right pb-5 text-[var(--mid-grey)]">Amount</td>
              </tr>
            </thead>
            <tbody>
              <TransactionDetail img={ profilePic} name="Emma Richardson" category="General" trancDate="17 Aug 2018" amount="74.09" />
              <TransactionDetail img={ profilePic} name="Daniel Carter" category="Dinning Out" trancDate="13 May 2018" amount="72.09" />
              <TransactionDetail img={ profilePic} name="Sum Park" category="Grocery" trancDate="17 Jun 2018" amount="40.09" />
              <TransactionDetail img={ profilePic} name="Sie Richmond" category="Grocery" trancDate="17 Jun 2018" amount="40.09" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Transaction