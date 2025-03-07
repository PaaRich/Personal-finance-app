
// import { FaCircleCheck } from "react-icons/fa6";
// import { RiErrorWarningFill } from "react-icons/ri";

const Bill = ({ logo, title, dateDue, amount }: { logo: string; title: string; dateDue: string; amount:number}) => {

  return (
      <tr className="border-t-2 border-t-[var(--lighter-grey)]">
          <td className="flex items-center py-4 max-md:mr-16">
              <img className="rounded-full w-[40px] h-[40px] mr-3" src={logo} alt="img" />
              <p className="font-bold md:text-[17px]">{ title}</p>
          </td>
          {/* <td className={`text-right flex items-center ${isProfit?"text-green-600":"text-red-600"}`}>
              Monthly-2nd
              {isProfit?<FaCircleCheck/>:<RiErrorWarningFill/>}
          </td> */}
          <td className="text-right max-md:mr-9">{ dateDue}</td>
          <td className="text-right font-bold">${amount}</td>
    </tr>
  )
}

export default Bill