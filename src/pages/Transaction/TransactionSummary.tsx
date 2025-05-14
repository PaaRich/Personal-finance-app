import { Link } from "react-router-dom"
import { IoMdArrowDropright } from "react-icons/io";
import SingleTransaction from "./SingleTransaction";
import profilePic from "../../assets/Person 1.jpg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTransaction } from "../../redux/Features/transactionSlice";
import { AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TransactionSummary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransaction());
  }
    , [dispatch]);
  
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  
  return (
    <div className="p-3 md:p-5 bg-white rounded-2xl w-full ">
      {/* nav */}
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold tracking-wide">Transactions</p>
        <Link className="inline-flex items-center text-[18px] hover:underline" to={'/transactions'}>View All<IoMdArrowDropright color="black" size={25}/></Link>
      </div>

      {/* list  */}
      <div className="mt-10">
        {data.transactions?.slice(0, 5).map((transaction) => (
          <SingleTransaction
            key={transaction.amount}
            profilePic={profilePic}
            name={transaction.name}
            amount={transaction.amount}
            transactionDate={formatDate(transaction.date)}
          />
        ))}

        {/* <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" /> */}
      </div>
    </div>
  )
}

export default TransactionSummary