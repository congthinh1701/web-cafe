import clsx from "clsx";
import { useState } from "react";
import styles from "./ListContent.module.scss";

function ListContent({ data }) {
  const [product, SetProduct] = useState([{...data}] || []);
  console.log(product);

  return (
    <div>
      <div className={clsx(styles.ListContent)}>
        {product.map((item, i) => {
          console.log()
          return (<p>{Object.keys(item)[i]}</p>)
        })}
      </div>
    </div>
  );
}
export default ListContent;
