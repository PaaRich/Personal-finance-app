import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Overview from "./pages/Overview/Overview";
import Transaction from "./pages/Transaction/Transaction";
import Budget from "./pages/Budget/Budget";
import Pots from "./pages/Pots/Pots";
import RecurringBills from "./pages/Recurring_bills/RecurringBills";
import Signing from "./pages/Signing/Signing";
import SignInForm from "./pages/Signing/SignInForm";
import SignUpForm from "./pages/Signing/SignUpForm";
import ProtectedRoutes from "./Utils/ProtectedRoutes";


function App() {
  return (
    <>
      <Routes>
        {/* login */}
        <Route path="/" element={<Signing />} >
          <Route index element={ <SignUpForm/>} />
          <Route path="login" element={ <SignInForm/>} />
        </Route>
        
        
        {/* pages */}
        <Route  element={<Layout/>}>
          <Route path="overview"
            element={
              <ProtectedRoutes>
                <Overview />
              </ProtectedRoutes>} />
          
          <Route path="transactions"
            element={
              <ProtectedRoutes>
                <Transaction />
              </ProtectedRoutes>} />
          
          <Route path="budgets"
            element={
              <ProtectedRoutes>
                <Budget />
              </ProtectedRoutes>} />
          
          <Route path="pots"
            element={
              <ProtectedRoutes>
                <Pots />
              </ProtectedRoutes>} />
          
          <Route path="recurring-bills"
            element={
              <ProtectedRoutes>
                <RecurringBills />
              </ProtectedRoutes>} />
        </Route>

      </Routes>
    </>
  )
}
export default App;