import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSlide11.css";

const HeroSlide11 = () => {
  const navigate = useNavigate();

  const onGobackContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="hero-slide-1-div1">
      <img
        className="j-balla-photography-6wmfpgnd-icon1"
        alt=""
        src="../jballaphotography6wmfpgnd--qunsplash-1@2x.png"
      />
      <div className="tour-line-div2">
        <div className="inner-daintree-container-div">
          <div className="inner-daintree-container-div">
            <div className="rectangle-div5" />
            <img
              className="rectangle-icon2"
              alt=""
              src="../rectangle2@2x.png"
            />
          </div>
          <div className="yasun-natural-reserve-eco-tou">
            <span className="yasun-natural-reserve-container">
              <p className="yasun-natural-reserve">Yasuní Natural Reserve</p>
              <p className="eco-tourism-subscription-membe">
                Eco-tourism subscription membership
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="container-second-macro-div" />
      <img className="rectangle-icon3" alt="" src="../rectangle-918.svg" />
      <img className="header-icon" alt="" src="../header.svg" />
      <img className="star-3-icon" alt="" src="../star3.svg" />
      <img className="star-2-icon" alt="" src="../star2.svg" />
      <img className="star-1-icon" alt="" src="../star1.svg" />
      <img className="lines-icon" alt="" src="../lines.svg" />
      <div className="right-macro-container-div" />
      <div className="subscribe-button-div">
        <div className="subscribe-container-div" />
        <div className="subsribe-text-div">SUBSCRIBE NOW</div>
      </div>
      <div className="nft-container-div">
        <div className="nft-subcontainer-div" />
        <img className="nft-green-icon" alt="" src="../nft-green-icon@2x.png" />
      </div>
      <img
        className="ayahuasca-logo-white-w-2-icon"
        alt=""
        src="../ayahuasca-logo-white-w-1@2x.png"
      />
      <div className="goback-container-div" onClick={onGobackContainerClick}>
        <div className="goback-button-div" />
        <div className="go-back-text">Go Back</div>
      </div>
      <div className="eth-bog-container-div" />
    </div>
  );
};

export default HeroSlide11;
