import styles from "./TextSubsContainer.module.css";

const TextSubsContainer = () => {
  return (
    <div className={styles.textSubsContainerDiv}>
      <div className={styles.titleSubscriptionDiv}>subscription benefits</div>
      <div className={styles.textSubscriptionDiv}>
        <ul className={styles.vIsitTheCommuityAndExperie}>
          <li className={styles.vIsitTheCommuity}>
            VIsit the commuity and experience and on-hand experience living with
            nature starying at our eco-tourism cabin.
          </li>
          <li className={styles.vIsitTheCommuity}>
            Meet the Shaman and discover yourself = through a unique Ayahuasco
            experice.
          </li>
          <li className={styles.vIsitTheCommuity}>Birdwatching tours.</li>
          <li>{`Discover a unique hidden trail to a magical waterfall. `}</li>
        </ul>
      </div>
    </div>
  );
};

export default TextSubsContainer;
