import clsx from "clsx";
import { useState } from "react";
import styles from "./ListContent.module.scss";

function ListContent() {
  const [product, SetProduct] = useState([]);

  return (
    <div>
      <div className={clsx(styles.ListContent)}>
       
        
      </div>
      
    </div>
  );
}
export default ListContent;
