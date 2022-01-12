import { useState } from "react";
import "./style.scss";

function ProductLeft({ product }) {
  const name = ["Coffee", "SanPhamNoiBat"];

  const [menu, setMenu] = useState(false);
  const [selected, setSected] = useState(null);
  const toggle = (i) => {
    selected === i ? setSected(null) : setSected(i);
  };
  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <div>

    </div>
    
  );
}
export default ProductLeft;
