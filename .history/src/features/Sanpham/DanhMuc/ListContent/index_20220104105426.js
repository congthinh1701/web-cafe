import clsx from "clsx";
import styles from "./ListContent.module.scss";


function ListContent({data}) {
    console.log(data)
  return (
    <div>
      <div className={clsx(styles.ListContent)}>
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
