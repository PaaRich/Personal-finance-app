import { Link } from "react-router-dom"
import { IoMdArrowDropright } from "react-icons/io";
import DonutChart from "../../components/Charts/PieChart";
import { useContext } from "react";
import { Context } from "../../context/Context";

const BudgetSummary = () => {
  const { dataForChart } = useContext(Context);
  return (
    <div  className="p-3 md:p-5 bg-white rounded-2xl">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold tracking-wide">Budgets</p>
        <Link className="inline-flex items-center text-[18px] hover:underline" to={'budgets'}>View All<IoMdArrowDropright color="black" size={25}/></Link>
      </div>

      <div className="flex flex-col md:flex-row items-start  md:items-center justify-between ">
        <div className="basis-[50%]">
          <DonutChart width={300} />
        </div>
        
        {/* Legend */}
        <div className="max-md:grid grid-cols-2 max-md:gap-x-5 md:flex md:flex-col gap-2 basis-[50%]">
          
                {dataForChart.map((item, index) => (
              <div key={index} className="flex items-center gap-3 mb-3">
                <div className="w-2 h-10 rounded" style={{ background: item.color }}></div>
                <div>
                  <p className="text-gray-700 text-sm">{item.name}</p>
                  <p className="font-bold">${item.value.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        
      
      </div>
    </div>
  )
}

export default BudgetSummary