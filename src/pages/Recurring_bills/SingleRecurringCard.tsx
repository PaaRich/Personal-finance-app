import styles from "./RecurringBills.module.css"
const SingleRecurringCard = ({ label, amount }: { label: string; amount:string}) => {
  return (
      <div className={`${styles.singleRecurringCard} relative z-0 overflow-hidden bg-[var(--light-beige)] my-2 rounded-2xl flex items-center justify-between px-5 py-5`}>
        <p className="text-[18px] text-[var(--m-grey)]">{ label}</p>
        <p className="font-bold text-[18px]">{ amount}</p>
    </div>
  )
}

export default SingleRecurringCard