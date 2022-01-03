import clsx from "clsx";
import styles from "./Section7.module.scss";

function Section7({ coffee }) {
  return (
    <div>
      <div className="container">
        <div className={clsx(styles.titleText)}>
          <h2>Vì sao nên chọn HaluCafe</h2>
          <p>
            Mỗi tuần là mỗi một câu chuyện ấm áp, mỗi tuần là một câu chuyện
            tình. Nào cùng thưởng thức cà phê và đọc nhé!
          </p>
        </div>
        <div className="row">
        <div className="col-xl-7 col-lg-7 col-md-7 col-12">
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
