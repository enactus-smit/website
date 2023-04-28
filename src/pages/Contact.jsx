import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [Enactuslogo, setEnactuslogo] = useState([]);

  useEffect(() => {
    const logoRefs = [ref(storage, "images/Enactus_Full_Color_logo.png")];
    Promise.all(logoRefs.map(getDownloadURL))
      .then((urls) => setEnactuslogo(urls))
      .catch((error) => console.log(error));
  }, []);

  //emailjs driver code
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w4amlqa",
        "template_yhxzv2d",
        form.current,
        "25a9P0wrp0ctMM_sW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Message not sent!");
        }
      );
  };

  return (
    <div className="h-screen w-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 w-full md:pr-10 mb-10">
        <div className="grid h-full w-full place-content-center">
          <img src={Enactuslogo} alt="side_img" />
        </div>
        <div className="flex flex-col w-full mt-6 bg-[#ffffffbd] p-8 rounded-3xl">
          <h1 className="flex justify-center text-[3rem] font-semibold text-gray-800">
            Contact Us
          </h1>
          <p className="flex justify-center text-lg font-medium">
            Feel free to send us your valuable feedback!
          </p>

          {/*Make sure that the name values are same as those in the email template*/}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col h-auto w-auto space-y-12 mt-10 md:px-10 lg:px-20"
          >
            <div className="flex flex-col space-y-2">
              <label className="text-lg font-medium">Name: </label>
              <input
                placeholder="Name *"
                name="name"
                className="input-boxes"
              ></input>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg font-medium">E-mail: </label>
              <input
                placeholder="E-mail *"
                name="email"
                className="input-boxes "
              ></input>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg font-medium">Subject: </label>
              <input
                placeholder="Subject *"
                name="subject"
                className="input-boxes"
              ></input>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg font-medium">Message: </label>
              <input
                placeholder="Type your message here *"
                name="message"
                className="pb-36 p-2 rounded-lg ring-4 ring-gray-400 outline-4 !outline-gray-700"
              ></input>
            </div>
            <button
              type="submit"
              value="send"
              className="bg-yellow-400 w-[30%] p-3 mx-auto rounded-md hover:bg-yellow-500"
            >
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
