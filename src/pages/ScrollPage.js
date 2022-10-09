import styles from "./ScrollPage.module.css";

const ScrollPage = () => {
  return (
    <div className={styles.scrollPageDiv}>
      <div className={styles.containerScrollDiv}>
        <div className={styles.subcontainerScrollDiv} />
        <img
          className={styles.arrowLeftIcon}
          alt=""
          src="../arrow-left@2x.png"
        />
        <img
          className={styles.arrowRightIcon}
          alt=""
          src="../arrow-right@2x.png"
        />
      </div>
    </div>
  );
};

export default ScrollPage;
