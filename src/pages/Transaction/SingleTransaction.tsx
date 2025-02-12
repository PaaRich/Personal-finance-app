
type SingleTransactionProps = Record<"name" | "amount" | "transactionDate" | "profilePic", string>;

const SingleTransaction = ({ name, amount, transactionDate, profilePic }:SingleTransactionProps) => {
    const isProfit = true;
  return (
      <div className="flex items-center justify-between py-4 border-b-[2px] border-b-gray-200">
          {/* identity */}
          <div className="flex items-center">
              <img className="rounded-full w-[40px] h-[40px]" src={profilePic} alt="img" />
              <p className="font-bold text-[18px] tracking-wide ml-4">{ name}</p>
          </div>

          {/* amount */}
          <div className="text-end">
              <p className={`${isProfit ? "text-[var(--green)]" : "text-[var(--deep-grey)]"} font-bold`}>{ amount}</p>
              <p className="text-[var(--mid-grey)]">{ transactionDate}</p>
          </div>
    </div>
  )
}

export default SingleTransaction