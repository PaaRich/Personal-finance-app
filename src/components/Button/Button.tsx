import styles from "./Button.module.css";

const Button = ({ title, onclick}: { title: string; onclick:()=>void}) => {
  return (
    <button onClick={onclick} className={`${styles.btn} rounded-[7px] bg-[var(--deep-grey)] hover:bg-[var(--mid-grey)] duration-200 cursor-pointer p-3  md:p-4 text-white block font-bold`}> + {title}</button>
  )
}

export default Button