import { BsThreeDots } from "react-icons/bs";
import { useState,useMemo } from "react";
import Detail from "../../components/Detail";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import SingleTransaction from "../Transaction/SingleTransaction";
import profilePic from "../../assets/Person 3.jpg"
import { BudgetCardProp } from "../../../types";

const BudgetCard = ({label,amount,spent,color}:BudgetCardProp) => {
    const [openDetail, setOpenDetail] = useState(false);
    const percent=useMemo(()=>Math.floor((spent / amount) * 100),[spent,amount])
    console.log(percent);
  return (
      <div className="bg-white rounded-2xl p-5">
          
          {/* nav */}
          <div className="flex items-center justify-between relative">
              <div className="flex items-center">
                <div style={{backgroundColor:`${color}`}} className="h-[20px] w-[20px] rounded-full mr-2" ></div>
                  <p className="text-[21px] font-bold">{ label}</p>
              </div>
              
              <div className="cursor-pointer p-1 rounded-[5px] hover:bg-[whitesmoke] duration-200" onClick={() => setOpenDetail(!openDetail)} >
                  <BsThreeDots />
              </div>
              
              {openDetail&&<Detail setState={setOpenDetail} name="Budget" editFn={()=>console.log('edit')} delFn={()=>console.log("delete")}/>}
          </div>

          {/* body */}
          <div >
              {/* details */}
              <div>
                  <p className="mt-5 text-[var(--mid-grey)] text-[18px]">Maximum of ${ amount }</p>
                  
                  {/* bar */}
                  <div className="my-5 bg-[var(--light-beige)] w-full rounded-[5px] h-10 relative">
                      <div style={{ width:`${percent}%`, backgroundColor:`${color}`}} className="h-7 absolute left-2 top-[50%] translate-y-[-50%] rounded-[5px]"></div>
                  </div>

                  <div className="flex items-center mb-5">
                      {/* spent */}
                      <div style={{borderLeftColor:`${color}`}} className="basis-[50%] border-l-4 pl-4">
                          <p>Spent</p>
                          <p className="font-bold text-[17px]">${ spent}</p>
                      </div>
                      {/* remaining */}
                      <div className="basis-[50%] border-l-4 pl-4 border-l-[var(--light-beige)]">
                          <p>Remaining</p>
                          <p className="font-bold text-[17px]">${ amount - spent}</p>
                      </div>
                  </div>
                  
              </div>

              {/* transaction */}
              <div className="bg-[var(--light-beige)] p-5 rounded-2xl">
                  {/* nav */}
                  <div className="flex items-center justify-between">
                      <p className="font-bold text-[19px] tracking-wide">Latest Spending</p>
                       <Link className="inline-flex items-center text-[18px] hover:underline" to={'/transactions'}>See All<IoMdArrowDropright color="black" size={25}/></Link>
                  </div>
                  <div>
                        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
                        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
                        <SingleTransaction profilePic={ profilePic} name="Emma Richardson" amount="75.45" transactionDate="17 Aug 2024" />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default BudgetCard