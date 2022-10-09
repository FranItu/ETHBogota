import { useState, useCallback } from "react";
import EnterProfileContainer from "../components/EnterProfileContainer";
import PortalPopup from "../components/PortalPopup";
import "./HeroSlide1.css";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";


const providerOptions = {
    coinbaseWallet: {
      package: CoinbaseWalletSDK,
      options: {
        appName: "Eth_Bogota",
        infuraId: {3: "https://polygon-mumbai.infura.io/v3/18265d36c5dd470d83dcc6a9a38b3616" }
      }


    }
}
const HeroSlide1 = () => {
  const {web3Provider, setWeb3Provider } = useState(null);
  async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        catchProvider: false,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
      if(web3ModalProvider){
        setWeb3Provider(web3ModalProvider);
      }
      consoleLog(web3ModalProvider);
    }
    catch(error) {
      console.error(error)

    }
  }

  const [isEnterProfileContainerOpen, setEnterProfileContainerOpen] =
    useState(false);

  const openEnterProfileContainer = useCallback(() => {
    setEnterProfileContainerOpen(true);
  }, []);

  const closeEnterProfileContainer = useCallback(() => {
    setEnterProfileContainerOpen(false);
  }, []);
  
  const audio = new Audio("/audio_poay_1.mp3")
  const audio2 = new Audio("/audio_poay_2.mp3")

  const start = () => {
    audio.play()
  }
  const start2 = () => {
    audio2.play()
  }
  

  return (
    <>
      <div className="hero-slide-1-div">
        <div className="id-epicbutton-div" onClick={() => {
          openEnterProfileContainer();
          start2();
          start();
          connectWallet();
        }}>
          <div className="id-button-text-div">
            <div className="identify-yourself-to-begin-thi">
              Get Started!
            </div>
          </div>
          <img className="ellipse-icon" alt="" src="../ellipse.svg" />
        </div>
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
              Subscribe to support Community-Based Natural Reserves and unlock
              unique eco-tourism experiences with your NFT.
            </div>
          
            <img className="serpent-1-icon" alt="" src="../serpent-1@2x.png" onClick={() => start()} />
            
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
