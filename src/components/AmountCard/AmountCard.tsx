
const AmountCard = ({ color, label, amount }: { color:"dark"|"light"; label:string,amount:string}) => {
  return (
      <div className={`${color=="dark"?"bg-[#201f24] text-white":"bg-[#fff]"} min-w-[350px] grow rounded-2xl`}>
          <div className="p-5">
              <p className="text-[17px] tracking-wider mb-3">{label}</p>
              <h1 className="font-bold text-4xl">$ {amount}</h1>
          </div>
    </div>
  )
}

export default AmountCard