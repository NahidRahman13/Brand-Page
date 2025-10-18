const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Your feet deserve the best</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shope Now </button>
          <button>Category </button>
          <div className="shopping">
            <p>Always available On</p>
            <div className="brand-icons">
              <img src="public/image/amazon.png" />
              <img src="public/image/flipkart.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="public/image/shoe_image.png" />
      </div>
    </main>
  );
};
export default HeroSection;
