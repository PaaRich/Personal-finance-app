import Navbar from "../../components/Navbar/Navbar";
import TransactionDetail from "./TransactionDetail";
import profilePic from "../../assets/Person 1.jpg"
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useState, useContext } from "react";
import { Context } from "../../context/Context";



const Transaction = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<string>("latest")
  const [category, setCategory] = useState<string>('all transactions');
  
  const {data} = useContext(Context);

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
              <select className="outline-0 border-2 p-3 rounded-[10px] text-[18px]" name="sort" value={sort} onChange={(e)=>setSort(e.target.value)}>
                <option value="latest">latest</option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
                <option value="highest">highest</option>
                <option value="lowest">lowest</option>
              </select>
            </div>

            {/* filter */}
           <div>
              <label className="mr-3" htmlFor="">Category</label>
              <select className="outline-0 border-2 p-3 rounded-[10px] text-[18px]" name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="all transactions">All transactions</option>
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
              {data.transactions?.map((aTransaction,index) => <TransactionDetail theKey={index} img={profilePic} name={aTransaction.name} category={aTransaction.category} trancDate={aTransaction.date} amount={aTransaction.amount} />)}
              
              {/* <TransactionDetail img={ profilePic} name="Daniel Carter" category="Dinning Out" trancDate="13 May 2018" amount={23} />
              <TransactionDetail img={ profilePic} name="Sum Park" category="Grocery" trancDate="17 Jun 2018" amount={23} />
              <TransactionDetail img={ profilePic} name="Sie Richmond" category="Grocery" trancDate="17 Jun 2018" amount={23} /> */}
            </tbody>
          </table>
        </div>

        {/* pagination */}
        <div className="flex items-center justify-between mt-5">
          <div className="py-2 px-3 border-2 bg-transparent rounded-[10px] flex items-center justify-around w-[94px]  hover:bg-[#93674f] hover:text-white duration-200 cursor-pointer " onClick={()=>console.log("hello")}><IoMdArrowDropleft size={25}/>Prev</div>
          <div>
            <span className="rounded-[10px] cursor-pointer mr-3 py-2 px-3 text-[18px] hover:text-white hover:bg-[#93674f] duration-200 border-2 border-[#93674f]" onClick={()=>{console.log("hello")}}>1</span>
            <span className="rounded-[10px] cursor-pointer mr-3 py-2 px-3 text-[18px] hover:text-white hover:bg-[#93674f] duration-200 border-2 border-[#93674f]" onClick={()=>{console.log("hello")}}>2</span>
            <span className="rounded-[10px] cursor-pointer mr-3 py-2 px-3 text-[18px] hover:text-white hover:bg-[#93674f] duration-200 border-2 border-[#93674f]" onClick={()=>{console.log("hello")}}>3</span>
            <span className="rounded-[10px] cursor-pointer mr-3 py-2 px-3 text-[18px] hover:text-white hover:bg-[#93674f] duration-200 border-2 border-[#93674f]" onClick={()=>{console.log("hello")}}>4</span>
            <span className="rounded-[10px] cursor-pointer mr-3 py-2 px-3 text-[18px] hover:text-white hover:bg-[#93674f] duration-200 border-2 border-[#93674f]  " onClick={()=>{console.log("hello")}}>5</span>
          </div>
          <div className="py-2 px-3 border-2 bg-transparent rounded-[10px] flex items-center justify-around w-[94px] hover:bg-[#93674f] hover:text-white duration-200 cursor-pointer" onClick={()=>{console.log("next")}}>Next<IoMdArrowDropright size={25}/></div>
        </div>
      </div>
    </div>
  )
}

export default Transaction