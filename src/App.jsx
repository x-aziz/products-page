import Cards from "./components/Cards.jsx";
import TrollyWhite from "./assets/icon-cart2.svg";
import { useDispatch, useSelector } from "react-redux";
import Shop from "./components/Shop.jsx";
import { useState } from "react";
import { reset } from "./Redux/userSlice.js";
function App() {
  const [show, setShow] = useState(false);
  const info = useSelector((state) => state.User);
  const res = useSelector((state) => state.Product.products);
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <p>name : {" " + info.name} </p>
        <p>surName :{" " + info.surName}</p>
        <p>sold : {" " + info.Sold} </p>
        <div className="box">
          <img src={TrollyWhite} onClick={() => setShow(!show)} alt="" />
          {show && <Shop />}
          <span className="notification">{" " + info.Counter}</span>
        </div>
        <p>total : {" " + info.total} </p>
      </header>
      <div className="containerZ">
        <div className="parent1">
          {res.map((res, i) => (
            <Cards data={res} key={i} />
          ))}
        </div>
        <button onClick={() => dispatch(reset())}>Buy the staffs</button>
      </div>
    </>
  );
}

export default App;
