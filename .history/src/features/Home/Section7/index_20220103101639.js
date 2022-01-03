import clsx from "clsx";
import styles from "./Section7.module.scss";

function Section7({ coffee }) {
  return (
    <div>
      <div className="container">
        <div className={clsx(styles.titleText)}>
          <h2>Vì sao nên chọn HaluCafe</h2>
          <p>
            Không những mang đến sự tuyệt vời thông qua các thức uống bí mật mà
            hơn thế nữa là cảm giác bạn tận hưởng được chỉ khi đến với Halu
            Cafe.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className={clsx(styles.Section7)}>
              <div className={clsx(styles.Img)}>
                <img
                  src={
                    "https://bizweb.dktcdn.net/100/351/580/themes/714586/assets/image-feature1.png?1628672823934"
                  }
                  alt="anh"
                />
              </div>
              <div className={clsx(styles.Header)}>
                <p>COFFEE NGUYÊN CHẤT</p>
              </div>
              <div className={clsx(styles.Content)}>
                <p>
                  Hạt cà phê được thu hoạch và rang xay theo quy trình khép kín
                  đúng công thức đặc biệt đảm bảo tính nguyên chất.
                </p>
              </div>
            </div>
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
