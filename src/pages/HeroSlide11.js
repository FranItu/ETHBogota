import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSlide11.css";

const HeroSlide11 = () => {
  const navigate = useNavigate();

  const onGobackContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
<>
  return (
    <div className="hero-slide-1-div1">
      <div className="tour-line-div2">
        <div className="inner-daintree-container-div">
          
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
</>
};

export default HeroSlide11;
