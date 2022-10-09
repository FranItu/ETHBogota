import { useState, useCallback } from "react";
import EnterProfileContainer from "../components/EnterProfileContainer";
import PortalPopup from "../components/PortalPopup";
import "./HeroSlide1.css";

const HeroSlide1 = () => {
  const [isEnterProfileContainerOpen, setEnterProfileContainerOpen] =
    useState(false);

  const openEnterProfileContainer = useCallback(() => {
    setEnterProfileContainerOpen(true);
  }, []);

  const closeEnterProfileContainer = useCallback(() => {
    setEnterProfileContainerOpen(false);
  }, []);

  return (
    <>
      <div className="hero-slide-1-div">
        <img
          className="j-balla-photography-6wmfpgnd-icon"
          alt=""
          src="../jballaphotography6wmfpgnd--qunsplash-1@2x.png"
        />
        <div className="id-epicbutton-div" onClick={openEnterProfileContainer}>
          <div className="id-button-text-div">
            <div className="identify-yourself-to-begin-thi">
              Identify yourself to begin this journey....
            </div>
          </div>
          <img className="ellipse-icon" alt="" src="../ellipse.svg" />
        </div>
        <img className="main-lines-icon" alt="" src="../main-lines.svg" />
        <div className="main-header-div">
          <div className="maintitle-header-div">
            <div className="proof-of-ayahuasca-embrace-the">
              <p className="proof-of-ayahuasca">
                <span>Proof of Ayahuasca</span>
              </p>
              <p className="embrace-the-serpent">
                <span>Embrace the Serpent</span>
              </p>
            </div>
            <div className="subsribe-to-support-community-">
              Subsribe to support Community-Based Natural Reserves and unlock
              unique eco-tourism experiences with your NFT.
            </div>
            <img className="serpent-1-icon" alt="" src="../serpent-1@2x.png" />
          </div>
          <div className="rectangle-div" />
          <img
            className="ayahuasca-logo-white-w-1-icon"
            alt=""
            src="../ayahuasca-logo-white-w-1@2x.png"
          />
        </div>
        <div className="container-div" />
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
