import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import I1 from "../img/i1.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div className=" py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex item checked:gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className=" text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className=" w-6 h-6 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className=" text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>{" "}
        </p>
        <p className=" text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          molestias eaque vero sed maxime, deserunt magnam commodi, laboriosam
          itaque repudiandae ipsam voluptas saepe consequatur alias modi.
          Libero, sed adipisci. Ex!
        </p>
        <button
          type="button"
          className=" bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-2xl transition-all ease-in-out"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full md:w-auto  md:h-650"
          alt="heroBg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex flex-wrap gap-4 items-center justify-center py-4 xl:px-40">
          {heroData &&
            heroData.map((n) => (
              <div
                id={n.id}
                className=" lg:w-190 p-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col justify-center items-center drop-shadow-2xl"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -md-10 lg:-mt-20"
                  alt="i1"
                />

                <p className=" mt-2 lg:mt-4 text-base lg:text-xl text-textColor font-semibold ">
                  {n.name}
                </p>

                <p className=" text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.desc}
                </p>

                <p className=" text-headingColor font-semibold text-sm">
                  <span className=" text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
