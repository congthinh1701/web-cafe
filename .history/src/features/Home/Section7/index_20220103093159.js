
function Section7({ coffee }) {
  
  return (
    <div>
      <OwlCarousel className="owl-theme" {...option}>
        {coffee.map((data) => (
          <div key={data.id} className={clsx(styles.item)}>
            <a href="/">
              <div className={clsx(styles.price)}>
                <p>{data.Price}đ</p>
              </div>
              <img src={data.ImageUrl} alt={data.Name} />
              <div className={clsx(styles.name)}>
                <p className={clsx(styles.nameTitle)}>{data.Name}</p>
              </div>
            </a>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default Section7;
