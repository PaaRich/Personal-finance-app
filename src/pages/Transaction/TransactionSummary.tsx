import { Link } from "react-router-dom"
import { IoMdArrowDropright } from "react-icons/io";
import SingleTransaction from "./SingleTransaction";
import profilePic from "../../assets/Person 1.jpg"

const TransactionSummary = () => {
  return (
    <div className="p-3 md:p-5 bg-white rounded-2xl w-full ">
      {/* nav */}
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold tracking-wide">Transactions</p>
        <Link className="inline-flex items-center text-[18px] hover:underline" to={'transactions'}>View All<IoMdArrowDropright color="black" size={25}/></Link>
      </div>

      {/* list  */}
      <div className="mt-10">
        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
      </div>
    </div>
  )
}

export default TransactionSummary