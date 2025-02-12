import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import SingleRecurringCard from "./SingleRecurringCard";

const RecurringBillSummary = () => {
  return (
    <div  className="p-5 bg-white rounded-2xl">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold tracking-wide">Budgets</p>
        <Link className="inline-flex items-center text-[18px] hover:underline" to={'recurring-bills'}>View All<IoMdArrowDropright color="black" size={25}/></Link>
      </div>

      <div className="mt-8">
        <SingleRecurringCard label="Paid Bills" amount="$157.38" />
        <SingleRecurringCard label="Total Upcoming" amount="$148.39" />
        <SingleRecurringCard label="Due Soon" amount="$139.19" />
      </div>
    </div>
  )
}

export default RecurringBillSummary