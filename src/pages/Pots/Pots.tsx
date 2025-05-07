import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import PotCard from "./PotCard";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import { RootState} from "../../redux/store";
import { useSelector,useDispatch } from "react-redux";
import { listenToPots } from "../../redux/Features/PotsSlice";
import { AppDispatch } from "../../redux/store";
import Skeleton from "react-loading-skeleton";

const Pots = () => {
  const { setOpenPot } = useContext(Context);
  const pots = useSelector((state: RootState) => state.pots)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Fetch pots data when the component mounts
    dispatch(listenToPots());
  }
  , [dispatch]);
  
  if (pots.isLoading) {
    return (
      <div>
        <Skeleton count={5} height={300} duration={4} className="my-3 w-[90%] mx-auto" />
      </div>
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
        {pots.data.map((pot) => (
          <PotCard 
            color={pot.theme} 
            label={pot.name} 
            target={pot.target} 
            amountSaved={pot.amountSaved || 0} 
          />
        ))}
        {/* <PotCard color="#277c78" label="Savings" target={2000} amountSaved={159}/>
        <PotCard color="#7c6a27" label="Concert Ticket" target={150} amountSaved={110}/>
        <PotCard color="#7c2759" label="Gift" target={60} amountSaved={40}/>
        <PotCard color="#27497c" label="New Laptop" target={1000} amountSaved={10}/> */}
      </div>
    </div>
  )
}

export default Pots
