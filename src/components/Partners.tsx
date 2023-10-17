import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { usePartners } from "../hooks/usePartners";

export const Partners = () => {
  const partners = usePartners()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    draggable: true,
    focusOnSelect: true,
    pauseOnHover: true,
    arrows: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-[40px] md:py-[60px] lg:py-[100px]">
      <div className="w-[90%] xl:w-[1100px] mx-auto">
      <Slider {...settings}>
        
        {partners?.map((partner, index) => {
          return <div className="" key={index}>
          <div className="w-full flex justify-center items-center">
            <img src={partner} alt="osc fashion" className="w-[150px]" />
          </div>
          
        </div>
        })}

        
      </Slider>
      </div>
    </div>
  )
}
