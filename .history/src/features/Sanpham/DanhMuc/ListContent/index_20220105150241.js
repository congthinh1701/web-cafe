import clsx from "clsx";
import { useState } from "react";
import styles from "./ListContent.module.scss";

function ListContent({ data }) {
  const [product, SetProduct] = useState([{...data}] || []);

  return (
    <div>
      <div className={clsx(styles.ListContent)}>
        {product.map((item, i) => (
          console.log(item)
        ))}
        {product.map((data, i) => { for (var j in data){
                  console.log(data[j])
                  return(
                    
                  )
                }
      </div>
    </div>
  );
}
export default ListContent;