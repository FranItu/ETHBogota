import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeroSlide11.module.css";

const HeroSlide11 = () => {
  const navigate = useNavigate();

  const onGobackContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onEthBogota1ImageClick = useCallback(() => {
    window.open("https://bogota.ethglobal.com/");
  }, []);

  return (
    <div className={styles.heroSlide1Div}>
      <img
        className={styles.jBallaPhotography6wmFPgndIcon}
        alt=""
        src="../jballaphotography6wmfpgnd--qunsplash-1@2x.png"
      />
      <div className={styles.tourLineDiv}>
        <div className={styles.innerDaintreeContainerDiv}>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle2@2x.png"
            />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-894.svg"
          />
          <img className={styles.rectangleIcon2} alt="" />
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="../rectangle-896.svg"
          />
          <div className={styles.yasunNaturalReserveEcoTou}>
            <span className={styles.yasunNaturalReserveContainer}>
              <p className={styles.yasunNaturalReserve}>
                Yasuní Natural Reserve
              </p>
              <p className={styles.ecoTourismSubscriptionMembe}>
                Eco-tourism subscription membership
              </p>
            </span>
          </div>
          <div className={styles.ecuadorDiv}>{`ecuador `}</div>
          <img
            className={styles.mapYasuni1Icon}
            alt=""
            src="../map-yasuni-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.containerSecondMacroDiv} />
      <img className={styles.rectangleIcon4} alt="" src="../line-right.svg" />
      <img className={styles.headerIcon} alt="" src="../header.svg" />
      <img className={styles.star3Icon} alt="" src="../star31.svg" />
      <img className={styles.star2Icon} alt="" src="../star21.svg" />
      <img className={styles.star1Icon} alt="" src="../star11.svg" />
      <img className={styles.linesIcon} alt="" src="../line-left.svg" />
      <div className={styles.rightMacroContainerDiv} />
      <div className={styles.subscribeButtonDiv}>
        <div className={styles.subscribeContainerDiv} />
        <div className={styles.subsribeTextDiv}>SUBSCRIBE NOW</div>
      </div>
      <div className={styles.nftContainerDiv}>
        <div className={styles.nftSubcontainerDiv} />
        <img
          className={styles.nftGreenIcon}
          alt=""
          src="../nft-green-icon@2x.png"
        />
      </div>
      <img
        className={styles.ayahuascaLogoWhiteW2Icon}
        alt=""
        src="../ayahuasca-logo-white-w-1@2x.png"
      />
      <div
        className={styles.gobackContainerDiv}
        onClick={onGobackContainerClick}
      >
        <div className={styles.gobackButtonDiv} />
        <div className={styles.goBackText}>Go Back</div>
      </div>
      <div className={styles.ethBogContainerDiv} />
      <img
        className={styles.ethBogota1Icon}
        alt=""
        src="../ethbogota-1@2x.png"
        onClick={onEthBogota1ImageClick}
      />
    </div>
  );
};

export default HeroSlide11;
