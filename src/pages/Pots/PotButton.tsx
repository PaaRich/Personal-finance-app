

const PotButton = ({ label, onclick }: { label: string; onclick:()=>void}) => {
  return (
      <button onClick={onclick} className="font-bold w-[50%] rounded-[10px] py-4 bg-[var(--light-beige)] hover:bg-white border-2 border-[white] hover:border-[black] cursor-pointer duration-200 text-black ">
          {label}
    </button>
  )
}

export default PotButton