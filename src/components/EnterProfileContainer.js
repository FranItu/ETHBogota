import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EnterProfileContainer.module.css";

const EnterProfileContainer = ({ onClose }) => {
  const navigate = useNavigate();

  const onEnterProfileButtonContainerClick = useCallback(() => {
    navigate("/heroslide1");
  }, [navigate]);

  return (
    <div className={styles.enterProfileContainerDiv}>
      <div
        className={styles.enterProfileButtonDiv}
        onClick={onEnterProfileButtonContainerClick}
      >
        <div className={styles.tourLineDiv}>
          <div className={styles.daintreeDiv}>
            <div className={styles.daintreeDiv}>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle@2x.png"
              />
            </div>
            <div className={styles.rectangleDiv1} />
            <div className={styles.yasunDiv}>Yasuní</div>
            <div className={styles.ecoTourismMembershipSubscri}>
              <span className={styles.ecoTourismMembershipSubscriContainer}>
                <p className={styles.ecoTourismP}>{`Eco-tourism `}</p>
                <p className={styles.membershipSubscription}>
                  membership subscription
                </p>
              </span>
            </div>
            <div className={styles.ecuadorDiv}>{`ecuador `}</div>
          </div>
        </div>
        <div className={styles.tourLineDiv1}>
          <div className={styles.daintreeDiv}>
            <div className={styles.daintreeDiv}>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle@2x.png"
              />
            </div>
            <div className={styles.rectangleDiv1} />
            <div className={styles.yasunDiv}>Yasuní</div>
            <div className={styles.ecoTourismMembershipSubscri}>
              <span className={styles.ecoTourismMembershipSubscriContainer}>
                <p className={styles.ecoTourismP}>{`Eco-tourism `}</p>
                <p className={styles.membershipSubscription}>
                  membership subscription
                </p>
              </span>
            </div>
            <div className={styles.ecuadorDiv}>{`ecuador `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterProfileContainer;
