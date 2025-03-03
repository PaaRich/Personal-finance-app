import signInLogo from "../../assets/Group 33.svg"
const signing = () => {
  return (
    <div className="h-dvh p-5 flex items-center">
      <div className="h-full">
        <img className="bg-black h-full rounded-2xl" src={signInLogo} alt="logo" />
      </div>
      <div className="w-full">
        <form className="mx-auto w-24 bg-amber-500" action="">
          <label htmlFor="">Name</label>
          <input type="text" />
        </form>
      </div>
    </div>
  )
}

export default signing