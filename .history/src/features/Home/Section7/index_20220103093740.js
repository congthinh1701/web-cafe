import clsx from "clsx";
import styles from "./Section5.module.scss";
function Section7({ coffee }) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className={clsx(styles.titleText)}>
            <h2>TIN TỨC</h2>
            <p>
              Mỗi tuần là mỗi một câu chuyện ấm áp, mỗi tuần là một câu chuyện
              tình. Nào cùng thưởng thức cà phê và đọc nhé!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
