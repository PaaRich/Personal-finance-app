import Navbar from "../../components/Navbar/Navbar";
import AmountCard from "../../components/AmountCard/AmountCard";
import PotSummary from "../Pots/PotSummary";
import TransactionSummary from "../Transaction/TransactionSummary";
import RecurringBillSummary from "../Recurring_bills/RecurringBillSummary";
import BudgetSummary from "../Budget/BudgetSummary";


const Overview = () => {
  
  return (
    <div>
      <Navbar title="Overview"/>
      <div>
        {/* amount cards */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-5 md:gap-x-5">
          <AmountCard color="dark" label="Current Balance" amount="37374" />
          <AmountCard color="light" label="Income" amount="4848"/>
          <AmountCard color="light" label="Expenses" amount="3455" />
        </div>

        {/* summaries */}
        <div className="flex flex-col lg:flex-row gap-x-5 pt-4 gap-y-5 lg:gap-y-0">

          <div className="flex flex-col basis-[50%] grow-0 gap-y-5">
            <PotSummary />
            <TransactionSummary/>
          </div>

          <div className="flex flex-col basis-[50%] grow gap-y-5 ">
            {/* budget */}
            <div>
              <BudgetSummary/>
            </div>

            <div>
              <RecurringBillSummary/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Overview