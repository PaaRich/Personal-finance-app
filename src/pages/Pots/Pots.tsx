import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import PotCard from "./PotCard";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Pots = () => {
  const { setOpenPot} = useContext(Context);

  return (
    <div>
      <Navbar title="Pots">
        <Button title="Add New Pot" onclick={()=>{setOpenPot(true)}}/>
      </Navbar>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(343px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(689px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(518px,1fr))] gap-5">
        <PotCard color="#277c78" label="Savings" target={2000} amountSaved={159}/>
        <PotCard color="#7c6a27" label="Concert Ticket" target={150} amountSaved={110}/>
        <PotCard color="#7c2759" label="Gift" target={60} amountSaved={40}/>
        <PotCard color="#27497c" label="New Laptop" target={1000} amountSaved={10}/>
      </div>
    </div>
  )
}

export default Pots