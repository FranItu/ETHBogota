import "./TextSubsContainer.css";

const TextSubsContainer = () => {
  return (
    <div className="text-subs-container-div">
      <div className="title-subscription-div">subscription benefits</div>
      <div className="text-subscription-div">
        <ul className="visit-the-commuity-and-experie">
          <li className="visit-the-commuity">
            VIsit the commuity and experience and on-hand experience living with
            nature starying at our eco-tourism cabin.
          </li>
          <li className="visit-the-commuity">
            Meet the Shaman and discover yourself = through a unique Ayahuasco
            experice.
          </li>
          <li className="visit-the-commuity">Birdwatching tours.</li>
          <li>{`Discover a unique hidden trail to a magical waterfall. `}</li>
        </ul>
      </div>
    </div>
  );
};

export default TextSubsContainer;
