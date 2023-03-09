import React from "react";
import sideImg from "../imgs/Enactus_Full_Color_logo.png"
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="h-screen w-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 w-full md:pr-10 h-screen mb-10">
        <div className="grid h-full w-full place-content-center">
          <img src={sideImg} alt="side_img" />
        </div>
        <div className="flex flex-col w-full mt-6 bg-[#ffffffbd] p-8 rounded-3xl">
          <h1 className="flex justify-center text-[3rem] font-semibold text-gray-800">
            Contact Us
          </h1>
          <p className="flex justify-center text-lg font-medium">
            Feel free to send us your valuable feedback!
          </p>
          <form className="flex flex-col h-auto w-auto space-y-12 mt-10 md:px-10 lg:px-20">
            <input placeholder="Name *" className="input-boxes">
            </input>
            <input placeholder="E-mail *" className="input-boxes ">
            </input>

            <input placeholder="Subject *" className="input-boxes">
            </input>
            <input placeholder="Type your message here *" className="
            pb-36 p-2 rounded-lg ring-4 ring-yellow-400 outline-4 !outline-yellow-400">
            </input>
            <button className="bg-yellow-400 w-[30%] p-3 mx-auto rounded-md hover:bg-yellow-500">
              Submit
            </button>
          </form>
        </div>
      </section>
      <div className="flex-1">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
