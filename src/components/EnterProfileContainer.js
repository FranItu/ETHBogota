import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./EnterProfileContainer.css";

const EnterProfileContainer = ({ onClose }) => {
  const navigate = useNavigate();

  const onEnterProfileButtonContainerClick = useCallback(() => {
    navigate("/heroslide1");
  }, [navigate]);

  return (
    <div className="enter-profile-container-div">
      <div
        className="enter-profile-button-div"
        onClick={onEnterProfileButtonContainerClick}
      >
        <div className="tour-line-div">
          <div className="daintree-div">
            <div className="daintree-div">
              <div className="rectangle-div1" />
              <img
                className="rectangle-icon"
                alt=""
                src="../rectangle@2x.png"
              />
            </div>
            <div className="rectangle-div2" />
            <div className="yasun-div">Yasuní</div>
            <div className="eco-tourism-membership-subscri">
              <span className="eco-tourism-membership-subscri-container">
                <p className="eco-tourism-p">{`Eco-tourism `}</p>
                <p className="membership-subscription">
                  membership subscription
                </p>
              </span>
            </div>
            <div className="ecuador-div">{`ecuador `}</div>
          </div>
        </div>
        <div className="tour-line-div1">
          <div className="daintree-div">
            <div className="daintree-div">
              <div className="rectangle-div1" />
              <img
                className="rectangle-icon"
                alt=""
                src="../rectangle@2x.png"
              />
            </div>
            <div className="rectangle-div2" />
            <div className="yasun-div">Yasuní</div>
            <div className="eco-tourism-membership-subscri">
              <span className="eco-tourism-membership-subscri-container">
                <p className="eco-tourism-p">{`Eco-tourism `}</p>
                <p className="membership-subscription">
                  membership subscription
                </p>
              </span>
            </div>
            <div className="ecuador-div">{`ecuador `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterProfileContainer;
