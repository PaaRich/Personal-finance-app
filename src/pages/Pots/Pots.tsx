import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";

const Pots = () => {
  return (
    <div>
      <Navbar title="Pots">
        <Button title="Add New Pot" onclick={()=>console.log("Add Pot")}/>
      </Navbar>
      <div>Pots</div>
    </div>
  )
}

export default Pots