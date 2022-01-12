import clsx from "clsx";
import { useState } from "react";
import styles from "./ListContent.module.scss";

function ListContent({ data }) {
  const [product, SetProduct] = useState([data]);
  console.log(product)

  return (
    <div>
      <div className={clsx(styles.ListContent)}>
        {product.map((item) => (
          console.log(item)
        ))}
      </div>
      <div className={clsx(styles.item)}>
                    <div className={clsx(styles.title)}>
                      <h3>{name[i]}</h3>
                      <span>+</span>
                    </div>
                    <ListContent data={data} />
                    
                  </div>
    </div>
  );
}
export default ListContent;
