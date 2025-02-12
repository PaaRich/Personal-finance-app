

const SmallPotsCard = ({ color, label, amount }: { color: string; label: string; amount:string}) => {
  return (
    <div className={`border-l-[5px] border-l-[${color}] pl-3`}>
          <p className="text-[var(--mid-grey)]">{ label}</p>
          <p className="font-bold text-[18px]">${ amount }</p>
    </div>
  )
}

export default SmallPotsCard