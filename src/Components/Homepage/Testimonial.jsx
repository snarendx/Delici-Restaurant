import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
  return (
    <section
      className="relative  bg-cover  bg-center text-white h-screen"
      style={{ backgroundImage: 'url("/ThreeGirls.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 flex gap-10 flex-col items-center justify-center h-full px-6 text-center space-y-10">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          className="w-full max-w-4xl"
        >
          <div className="flex flex-col items-center space-y-6">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed">
              "I wanted to thank you for inviting me down for that amazing
              dinner the other night. The food was extraordinary."
            </blockquote>
            <div className="flex space-x-6 items-center !-rounded-full ustify-center">
              <img
                src="/Testimonals1.jpg"
                alt="Dan Biston"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 shadow-lg"
              />
              <img
                src="/Testimonals2.jpg"
                alt="Jane Smith"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 shadow-lg"
              />
              <img
                src="/Testimonals3.jpg"
                alt="Sarah Lee"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 shadow-lg"
              />
            </div>
            <p className="text-sm md:text-lg font-medium text-gray-300">
              Dan Biston | Jane Smith | Sarah Lee
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed">
              "It was a wonderful experience, and I will never forget it. The
              ambiance was magical."
            </blockquote>
            <div className="flex space-x-6 items-center  justify-center">
              <img
                src="/Testimonals1.jpg"
                alt="John Doe"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 shadow-lg"
              />
              <img
                src="/Testimonals2.jpg"
                alt="Emily Clark"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 shadow-lg"
              />
              <img
                src="/Testimonals3.jpg"
                alt="Michael Lee"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg"
              />
            </div>
            <p className="text-sm md:text-lg font-medium text-gray-300">
              John Doe | Emily Clark | Michael Lee
            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
