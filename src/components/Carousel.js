/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Img from "gatsby-image";

import { getRandomColour } from "~utils/helpers";

const Carousel = ({
  className,
  images,
  options = {
    gap: 0,
    perView: 1,
    type: `carousel`
  }
}) => {
  useEffect(() => {
    new Glide(`.glide`, options).mount();
  }, []);

  return (
    <div className={`carousel glide ${className}`}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {images.map((image, index) => {
            const imageIndex = index;

            return (
              <li
                key={`CarouselImage-${imageIndex}`}
                className="glide__slide h-auto"
              >
                <Img
                  alt="carousel image"
                  backgroundColor={getRandomColour()}
                  className="w-full h-full relative object-cover"
                  fluid={image.image.childImageSharp.fluid}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-row flex-no-wrap justify-between xs:flex-col xs:justify-start">
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {images.map((button, index) => {
            const buttonIndex = index;

            return (
              <button
                key={`CarouselBullet-${buttonIndex}`}
                type="button"
                className="glide__bullet glide__bullet--active pr-8 py-4 xs:pr-4 f4"
                data-glide-dir={`=${buttonIndex}`}
              >
                {buttonIndex + 1}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="carousel__buttons w-full h-full absolute top-0 left-0 flex items-center pointer-events-none"
        data-glide-el="controls"
      >
        <button
          className="carousel__buttons--left absolute left-0 f3 -ml-16 pointer-events-auto"
          data-glide-dir="<"
          type="button"
        >
          ◄
        </button>
        <button
          className="carousel__buttons--right absolute right-0 f3 -mr-16 pointer-events-auto"
          data-glide-dir=">"
          type="button"
        >
          ►
        </button>
      </div>
    </div>
  );
};

export default Carousel;
