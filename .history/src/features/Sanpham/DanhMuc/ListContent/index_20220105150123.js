import clsx from "clsx";
import { useState } from "react";
import styles from "./ListContent.module.scss";

function ListContent({ data }) {
  const [product, SetProduct] = useState([{...data}] || []);

  return (
    <div>
      <div className={clsx(styles.ListContent)}>
        {product.map((item, i) =>{for (var in item)} return (
          <p>dsad</p>
        ))}
      </div>
    </div>
  );
}
export default ListContent;