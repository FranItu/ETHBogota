import { useState, useCallback } from "react";
import EnterProfileContainer from "../components/EnterProfileContainer";
import PortalPopup from "../components/PortalPopup";
import styles from "./HeroSlide1.module.css";

const HeroSlide1 = () => {
  const [isEnterProfileContainerOpen, setEnterProfileContainerOpen] =
    useState(false);

  const openEnterProfileContainer = useCallback(() => {
    setEnterProfileContainerOpen(true);
  }, []);

  const closeEnterProfileContainer = useCallback(() => {
    setEnterProfileContainerOpen(false);
  }, []);

  const onEthBogota1ImageClick = useCallback(() => {
    window.open("https://bogota.ethglobal.com/");
  }, []);

  return (
    <>
      <div className={styles.heroSlide1Div}>
        <img
          className={styles.jBallaPhotography6wmFPgndIcon}
          alt=""
          src="../jballaphotography6wmfpgnd--qunsplash-1@2x.png"
        />
        <div className={styles.macroHeaderEpicDiv} />
        <img className={styles.lineRightIcon} alt="" src="../line-right.svg" />
        <img className={styles.headerIcon} alt="" src="../header.svg" />
        <div className={styles.mainTitleHeaderDiv}>
          <div className={styles.proofOfAyahuascaEmbraceThe}>
            <p className={styles.proofOfAyahuasca}>
              <span>Proof of Ayahuasca</span>
            </p>
            <p className={styles.embraceTheSerpent}>
              <span>Embrace the Serpent</span>
            </p>
          </div>
          <div className={styles.subsribeToSupportCommunity}>
            Subsribe to support Community-Based Natural Reserves and unlock
            unique eco-tourism experiences with your NFT.
          </div>
        </div>
        <div
          className={styles.iDEpicButtonDiv}
          onClick={openEnterProfileContainer}
        >
          <div className={styles.iDButtonTextDiv}>
            <div className={styles.identifyYourselfToBeginThi}>
              Identify yourself to begin this journey....
            </div>
          </div>
          <img className={styles.ellipseIcon} alt="" src="../ellipse.svg" />
        </div>
        <img className={styles.star3Icon} alt="" src="../star3.svg" />
        <img className={styles.star2Icon} alt="" src="../star2.svg" />
        <img className={styles.star1Icon} alt="" src="../star1.svg" />
        <img className={styles.lineLeftIcon} alt="" src="../line-left.svg" />
        <div className={styles.rectangleDiv} />
        <img
          className={styles.ayahuascaLogoWhiteW1Icon}
          alt=""
          src="../ayahuasca-logo-white-w-1@2x.png"
        />
        <div className={styles.containerDiv} />
        <img
          className={styles.ethBogota1Icon}
          alt=""
          src="../ethbogota-1@2x.png"
          onClick={onEthBogota1ImageClick}
        />
      </div>
      {isEnterProfileContainerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEnterProfileContainer}
        >
          <EnterProfileContainer onClose={closeEnterProfileContainer} />
        </PortalPopup>
      )}
    </>
  );
};

export default HeroSlide1;
