import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import DonutChart from "../../components/Charts/PieChart";
import { useContext,useEffect } from "react";
import { Context } from "../../context/Context";
import BudgetCard from "./BudgetCard";
import { useSelector,useDispatch } from "react-redux";
import { RootState,AppDispatch } from "../../redux/store";
import { fetchTransaction } from "../../redux/Features/transactionSlice";

const Budget = () => {
  const { data, openPopUp, setOpenPopUp } = useContext(Context);
  const budgets = useSelector((state: RootState) => state.transactions.data.budgets)
  const dispatch = useDispatch<AppDispatch>();
  

   useEffect(() => {
      dispatch(fetchTransaction());
    },[dispatch])
  
  return (
    <div className="relative">
      <Navbar title="Budgets">
        <Button title="Add New Budget" onclick={()=>{setOpenPopUp(!openPopUp)}}/>
      </Navbar>

      {/* body */}
      <div className="flex gap-x-5">

        <div className="w-[428px] grow-0 bg-white rounded-2xl p-5 h-fit">
          <div>
            <DonutChart width={380} innerRadius={70} outerRadius={110}/>
          </div>

          <div>
            <h1 className="font-bold text-2xl mb-5">Spending Summary</h1>
              {data.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b-2 border-b-[var(--lighter-grey)] py-5">
                  <div className="flex items-center gap-x-3">
                    <div className="w-[4px] h-6 rounded" style={{ background: item.color }}></div>
                    <p className="text-[var(--mid-grey)] text-[18px]">{item.name}</p>
                  </div>

                  <div className="flex items-center">
                    <p className="font-bold text-[19px] pr-2">${item.value.toFixed(2)}</p>
                    <p>of ${item.value.toFixed(2) }</p>
                </div>
                
              
            </div>
          ))}
          </div>
          
        </div>

        {/* cards */}
        <div className="grow w-auto flex flex-col gap-y-5">
          {budgets?.map((aBudget) => <BudgetCard color={ aBudget.theme} label={aBudget.category} amount={aBudget.maximum} spent={50/100*aBudget.maximum} />)}
          {/* <BudgetCard color="#277c78" label="Entertainment" amount={200} spent={150}/>
          <BudgetCard color="#82c9d7" label="Bills" amount={350} spent={50}/>
          <BudgetCard color="#60a5fa" label="Dinning Out" amount={250} spent={70}/>
          <BudgetCard color="#934767" label="Personal Care" amount={320} spent={80}/> */}
        </div>
      </div>
    </div>
  )
}

export default Budget