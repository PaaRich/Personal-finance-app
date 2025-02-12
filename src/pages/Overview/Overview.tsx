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
        <div className="flex items-center justify-between gap-x-5">
          <AmountCard color="dark" label="Current Balance" amount="4836.00"/>
          <AmountCard color="light" label="Income" amount='3814.25'/>
          <AmountCard color="light" label="Expenses" amount="1700.50"/>
        </div>

        {/* summaries */}
        <div className="flex gap-x-5 pt-4">

          <div className="flex flex-col basis-[50%] grow-0 gap-y-5">
            <PotSummary />
            <TransactionSummary/>
          </div>

          <div className="flex flex-col basis-[50%] grow gap-y-5">
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