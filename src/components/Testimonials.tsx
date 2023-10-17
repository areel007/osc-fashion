import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    draggable: true,
    focusOnSelect: true,
    pauseOnHover: true,
    arrows: false,
    autoplaySpeed: 5000,
    
  };

  return (
    <div className="w-[90%] xl:w-[1100px] mx-auto">
      <Slider {...settings}>
        <div className="w-full lg:w-[800px] mx-auto">
          <div className="flex flex-col items-center gap-[20px]">
          <p className="text-[14px] md:text-[18px] text-center text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At veniam
            eum ipsam illo vero porro, voluptatum minima consequatur dolore,
            eveniet error molestiae! Quas unde deleniti distinctio similique
            consequatur modi explicabo, expedita tempore reiciendis nam aperiam
            molestias perspiciatis assumenda quis nostrum.
          </p>

          <div className="w-[100px] h-[100px] rounded-full bg-gray-500"></div>

          <p className="text-black font-[700] text-[14px] md:text-[18px]">
            Dacly Collections <span className="font-[400]">/ Lorem ipsum dolor sit amet.</span>
          </p>
          </div>
        </div>

        <div className="w-full lg:w-[800px] mx-auto">
          <div className="flex flex-col items-center gap-[20px]">
          <p className="text-[14px] md:text-[18px] text-center text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At veniam
            eum ipsam illo vero porro, voluptatum minima consequatur dolore,
            eveniet error molestiae! Quas unde deleniti distinctio similique
            consequatur modi explicabo, expedita tempore reiciendis nam aperiam
            molestias perspiciatis assumenda quis nostrum.
          </p>

          <div className="w-[100px] h-[100px] rounded-full bg-gray-500"></div>

          <p className="text-black font-[700] text-[18px]">
            Dacly Collections <span className="font-[400]">/ Lorem ipsum dolor sit amet.</span>
          </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
