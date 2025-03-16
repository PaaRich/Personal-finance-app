import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import PotCard from "./PotCard";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { RootState} from "../../redux/store";
import { useSelector } from "react-redux";

const Pots = () => {
  const { setOpenPot } = useContext(Context);
  const pots = useSelector((state: RootState) => state.pots)
  
  if (pots.isLoading) {
    return (
      <div>Loading</div>
    )
  }

  if (pots.error) {
    return (
      <div>error</div>
    )
  }

  return (
    <div>
      <Navbar title="Pots">
        <Button title="Add New Pot" onclick={() => {
          console.log(pots)
          setOpenPot(true)
        }} />
      </Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* {pots.data.map((pot) => {
          <PotCard color={pot.theme} label={pot.name} target={pot.tar} />
        })} */}
        <PotCard color="#277c78" label="Savings" target={2000} amountSaved={159}/>
        <PotCard color="#7c6a27" label="Concert Ticket" target={150} amountSaved={110}/>
        <PotCard color="#7c2759" label="Gift" target={60} amountSaved={40}/>
        <PotCard color="#27497c" label="New Laptop" target={1000} amountSaved={10}/>
      </div>
    </div>
  )
}

export default Pots