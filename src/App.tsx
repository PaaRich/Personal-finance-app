import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Overview from "./pages/Overview/Overview";
import Transaction from "./pages/Transaction/Transaction";
import Budget from "./pages/Budget/Budget";
import Pots from "./pages/Pots/Pots";
import RecurringBills from "./pages/Recurring_bills/RecurringBills";
import Signing from "./pages/Signing/signing";


function App() {
  return (
    <>
      <Routes>
        {/* login */}
        <Route path="/" element={<Signing />} />
        
        
        {/* pages */}
        <Route  element={<Layout/>}>
          <Route path="overview" element={<Overview />} />
          <Route path="transactions" element={<Transaction/> } />
          <Route path="budgets" element={<Budget/> } />
          <Route path="pots" element={<Pots/> } />
          <Route path="recurring-bills" element={<RecurringBills/> } />
        </Route>

      </Routes>
    </>
  )
}
export default App;