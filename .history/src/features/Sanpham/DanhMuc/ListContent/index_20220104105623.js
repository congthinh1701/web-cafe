import clsx from "clsx";
import { useState } from "react";
import styles from "./ListContent.module.scss";


function ListContent({data}) {
    const [product,SetProduct]=useState([data])

    console.log(data)
  return (
    <div>
      <div className={clsx(styles.ListContent)}>
      {product.map((data)=>(
          console.log(data)
      ))}
        <ul>
          <li>ghghgh</li>
          <li>ghghgh</li>
          <li>ghghgh</li>
          <li>ghghgh</li>
        </ul>
      </div>
    </div>
  );
}
export default ListContent;
