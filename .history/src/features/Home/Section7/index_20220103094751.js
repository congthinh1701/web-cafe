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
          <div className=" col-md-4 col-12">
            <p>dsadasdsfda</p>
          </div>
          <div className=" col-md-4 col-12">
            <p>dsadasdsa</p>
          </div>
          <div className=" col-md-4 col-12">
            <p>dsadasdsa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
