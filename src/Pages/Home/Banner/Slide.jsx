const Slide = ({ slide, isActive }) => {
    return (
      <div className={`slides ${isActive ? "active" : "inactive"}`}>
        <img className="slide-image" src={slide.image} alt={slide.title} />
        <div className="slide-content">
          <h2 className="slide-title">{slide.title}</h2>
          <h5 className="slide-text">{slide.description}</h5>
          <div className="subscription-form">
            <input type="email" placeholder="Your email address" />
            <img
              className="email-icon"
              src="https://i.ibb.co/mNtrQ4d/icon-email-2-svg.png"
              alt="email"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
    );
  };

export default Slide;