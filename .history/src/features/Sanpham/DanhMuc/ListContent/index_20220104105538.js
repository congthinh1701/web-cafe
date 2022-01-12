import clsx from "clsx";
import styles from "./ListContent.module.scss";


function ListContent({data}) {
    const [pro]

    console.log(data)
  return (
    <div>
      <div className={clsx(styles.ListContent)}>
      {data.map(()=>(
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
