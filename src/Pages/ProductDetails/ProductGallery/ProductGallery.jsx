import Slider from "react-slick";

const ProductGallery = ({ images }) => {
  const imageArray = Array.isArray(images) ? images : Object.values(images);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container max-w-md mx-auto cursor-grab">
      <Slider {...settings}>
        {imageArray.map((img, index) => (
          <div key={index}>
            <img className="rounded-lg" src={img} alt={`Product ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ProductGallery;