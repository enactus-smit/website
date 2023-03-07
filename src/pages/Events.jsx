import React from "react";
import Footer from "../components/Footer";
import rangDerun from "../imgs/rangderun.jpeg";
import ecoHues from "../imgs/holiProd.jpeg";
import clothDon from "../imgs/clothDon.jpeg";

const Events = () => {
  return (
    <div className="flex flex-col h-screen">
      <section>
        <div className="py-6">
          <div className="container mx-auto flex flex-col items-start md:flex-row ">
            <div
              className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 bg-[#ffffffd5]
            rounded-2xl"
            >
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-semibold">
                Events
              </p>
              <p className="text-sm md:text-base mb-4">
                Here's a timeline of the events that we have conducted so far
                along with the upcoming events as well.
              </p>
            </div>
            <div className="ml-0 md:ml-0 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className=" border-yellow-500 absolute h-full border-4 rounded-md right-[50%]"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right ">
                      <p className="mb-3 text-base font-semibold">
                        February 2023
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Cloth Donation Drive
                      </h4>
                      <span
                        className="absolute right-[49%] flex items-center justify-center w-6 h-6 rounded-full ring-8
                       ring-yellow-500 bg-black"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <img
                      className="rounded-2xl w-56 ml-auto"
                      src={clothDon}
                      alt="cloth donation"
                       />
                      <br/>
                      <p className="text-sm md:text-base leading-snug text-opacity-100">
                      Providing clothing to those in need.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base font-semibold ">
                        March 2023
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Project EcoHues
                      </h4>
                      <span
                        className="absolute right-[49%] flex items-center justify-center w-6 h-6 rounded-full ring-8
                       ring-yellow-500 bg-black"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <img
                      className="w-56 rounded-2xl"
                      src={ecoHues}
                      alt="ecohues"
                       />
                      <br/>
                      <p className="text-sm md:text-base leading-snug text-opacity-100">
                        Organic Holi colors made from 100% biodegradable
                        materials. Safe for the environment and gentle on the
                        skin. Spread the joy of Holi guilt-free with Enactus
                        EcoHues!
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base font-semibold ">
                        15th March, 2023
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Website Launch
                      </h4>
                      <span
                        className="absolute right-[49%] flex items-center justify-center w-6 h-6 rounded-full ring-8
                       ring-yellow-500 bg-black"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <p className="text-sm md:text-base leading-snug text-opacity-100">
                      Launching soon - Our new website! Stay tuned for updates.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base font-semibold ">
                        18 March, 2023
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Rang De Runway
                      </h4>
                      <span
                        className="absolute right-[49%] flex items-center justify-center w-6 h-6 rounded-full ring-8
                       ring-yellow-500 bg-black"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <img
                      className="w-56 rounded-2xl"
                      src={rangDerun}
                      alt="Rang De Runway"
                       />
                      <br/>
                      <p className="text-sm md:text-base leading-snug text-opacity-100">
                        Enactus SMIT along with HULT PRIZE FOUNDATION presents,
                        an eve for the fashionistas to showcase their talents.
                        Featuring best outfits out of waste materials!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div classNameName="mx-8 md:mx-20 flex-1">
        <Footer />
      </div>
    </div>
  );
};

export default Events;
