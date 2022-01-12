import clsx from "clsx";
import { useState } from "react";
import styles from "./ListContent.module.scss";

function ListContent({ data }) {
  const [product, SetProduct] = useState([{...data}] || []);

  return (
    <div>
      <div className={clsx(styles.ListContent)}>
        {product.map((item, i) => {
          return (
            <p>{item.lentgh}</p>
            )
        })}
      </div>
    </div>
  );
}
export default ListContent;