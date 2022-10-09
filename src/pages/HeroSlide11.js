import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSlide11.css";

const HeroSlide11 = () => {
  const navigate = useNavigate();

  const onGobackContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
<></>
  return (
    <div className="hero-slide-1-div1">
        <div className="inner-daintree-container-div">
          <div className="yasun-natural-reserve-eco-tou">
            <span className="yasun-natural-reserve-container">
              <p className="yasun-natural-reserve">Yasuní Natural Reserve</p>
              <p className="eco-tourism-subscription-membe">
                {'\n'} Eco-Tourism Subscription Membership
              </p>
            </span>
          </div>   
        </div>
      <div className="right-macro-container-div" />
      <div className="subscribe-button-div">
        <div className="subscribe-container-div" />
        <div className="subsribe-text-div">SUBSCRIBE NOW</div>
      </div>
      <div className="nft-container-div">
        <div className="nft-subcontainer-div" />
        <img className="nft-green-icon5" alt="" src="../ShamanSnake5.png" />
        <img className="nft-green-icon4" alt="" src="../ShamanSnake4.png" />
        <img className="nft-green-icon3" alt="" src="../ShamanSnake3.png" />
        <img className="nft-green-icon2" alt="" src="../ShamanSnake2.png" />
        <img className="nft-green-icon" alt="" src="../ShamanSnake1.png" />
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
