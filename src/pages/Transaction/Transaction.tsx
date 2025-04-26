import Navbar from "../../components/Navbar/Navbar";
import TransactionDetail from "./TransactionDetail";
import profilePic from "../../assets/Person 1.jpg"
import { AiOutlineSearch } from "react-icons/ai";
import Pagination from "../../components/Pagination";
import { FaFilter } from "react-icons/fa";
import { PiSortAscendingFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState,AppDispatch } from "../../redux/store";
import { fetchTransaction } from "../../redux/Features/transactionSlice";



const Transaction = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<string>("latest")
  const [category, setCategory] = useState<string>('all transactions');
  const [page, setPage] = useState<number>(1);
  const limit = 10;
  
  const dispatch = useDispatch<AppDispatch>();
 
  const {isLoading,error,data} = useSelector((state: RootState) => state.transactions);
  
  console.log(isLoading,error,data)

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const itemsToDisplay = data.transactions?.slice(startIndex, endIndex);
console.log(itemsToDisplay.length)
  const paginate = (pageNumber:number) => {
    setPage(pageNumber);
  }

  useEffect(() => {
    dispatch(fetchTransaction());
  },[dispatch])

  return (
    <div>
      <Navbar title="Transaction"/>
      <div className="bg-white rounded-2xl p-3 md:p-5">
        <div className="flex items-center justify-between mb-10 w-full">
          <form action="">
            <div className="flex items-center justify-between p-3 border-2 rounded-[10px] text-[18px] w-full lg:w-[320px]"><input className="outline-0 w-[90%] " type="text" placeholder="Search transaction" value={search} onChange={(e)=>setSearch(e.target.value)}/><AiOutlineSearch size={23} /></div>
          </form>

          <div className="flex items-center gap-x-2 sm:gap-x-6">
               {/* sort */}
            <div>
              <div className="hidden md:block">
                <label className="lg:mr-3 mr-1" htmlFor="">Sort by</label>
                <select className="outline-0 border-2 p-3 rounded-[10px] text-[18px]" name="sort" value={sort} onChange={(e)=>setSort(e.target.value)}>
                  <option value="latest">latest</option>
                  <option value="A to Z">A to Z</option>
                  <option value="Z to A">Z to A</option>
                  <option value="highest">highest</option>
                  <option value="lowest">lowest</option>
                </select>
              </div>

              {/* sort for phone */}
              <div>
                <PiSortAscendingFill size={25} className="block md:hidden"/>
              </div>
            </div>

            {/* filter */}
            <div>
              <div className="hidden md:block">
              <label className="lg:mr-3 mr-1" htmlFor="">Category</label>
              <select className="outline-0 border-2 p-3 rounded-[10px] text-[18px]" name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="all transactions">All transactions</option>
                <option value="entertainment">Entertainment</option>
                <option value="bills">Bills</option>
                <option value="groceries">Groceries</option>
                <option value="dining Out">Dining Out</option>
                <option value="Transportation">Transportation</option>
              </select>
              </div>
              
              {/* filter for phone */}
              <div>
                <FaFilter size={25} className="block md:hidden"/>
              </div>
            </div>
           
          </div>
         
          
        </div>
        
        {/* table */}
        <div className="min-w-[300px] max-md:overflow-x-scroll">
          <table className="w-full">
            <thead>
              <tr className="text-nowrap">
                <td className="text-left pb-5 text-[var(--mid-grey)]">Recipient/Sender</td>
                <td className="text-center pb-5 text-[var(--mid-grey)]">Category</td>
                <td className="text-center pb-5 text-[var(--mid-grey)]">Transaction Date</td>
                <td className="text-right pb-5 text-[var(--mid-grey)]">Amount</td>
              </tr>
            </thead>
            <tbody>
              {itemsToDisplay?.map((aTransaction,index) => <TransactionDetail theKey={index} img={profilePic} name={aTransaction.name} category={aTransaction.category} trancDate={aTransaction.date.split("T")[0]} amount={aTransaction.amount} />)}
            </tbody>
          </table>
        </div>

        {/* pagination */}
        <Pagination totalPages={data.transactions.length} limit={limit} paginate={paginate}/>
      </div>
    </div>
  )
}

export default Transaction