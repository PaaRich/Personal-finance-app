const TransactionDetail = ({  img, name, category, trancDate, amount }: { img: string; name: string; category: string; trancDate: string; amount:number}) => {
  return (
    <tr className="border-t-2 border-t-[var(--lighter-grey)]">
                <td className="flex items-center py-4">
              <img className="w-[50px] h-[50px] rounded-full mr-3" src={img} alt="img" />
              <p className="font-bold text-[18px] text-[var(--deep-grey)]">{ name}</p>
                </td>
          <td className="text-center text-[var(--mid-grey)]">{ category}</td>
          <td className="text-center text-[var(--mid-grey)]">{ trancDate}</td>
          <td className="text-right font-bold text-[18px] text-[var(--deep-grey)]">${ amount}</td>
              </tr>
  )
}

export default TransactionDetail