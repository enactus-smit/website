import React from "react";
import encSmit from "../imgs/Enactus-SMIT-white.png";
import { Testimonial } from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="relative mx-16 h-auto w-auto">
      <section className="">
        <div className="flex justify-center items-center py-10">
          <img
            src={encSmit}
            alt="Logo"
            width={500}
            height={500}
            className="w-80 h-64"
          />
        </div>
      </section>

      {/*About us */}

      <section className="relative flex flex-col">
      <h1 className="whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[5.2rem] font-semibold">
            Who We Are
          </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
        <article className="">
          <p className="text-justify md:text-[1.2rem] lg:text-[1.5rem] text-gray-900 font-medium indent-20 mt-8 leading-relaxed">
            <span className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] font-semibold">
              Enactus{" "}
            </span>
            is a network of global leaders that use effective business
            strategies for positive social and environmental impact. It is a
            non-profit organisation that uses the United Nations 17 Sustainable
            Development Goals as a framework to bring about a change and create
            a better world for everyone. Enactus SMIT is a newly formed chapter
            of this global platform. Since our establishment in 2022, we&apos;ve
            been actively working on our first project
            <span className="lg:text-[1.6rem] font-semibold">
              {" "}
              अन्न-Drishti
            </span>
            . Backed by a strong core team and supportive local businesses, we
            aim to make our surroundings more sustainable than ever.
          </p>
        </article>
        <div className="relative grid place-content-center">
          <img src={encSmit} 
          alt="pic" />
        </div>
      </div>
      </section>

      {/*testimonials*/}

      <section className="flex-col w-full h-auto pb-4">
        <h1 className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[5.2rem] font-semibold">
          Testimonials
        </h1>
        <main className="grid md:grid-cols-2 gap-4 md:gap-10">
          <Testimonial
            heading="Highlight heading"
            subHeading="My idea of team work was unclear before joining Enactus. Upon joining, I got my first survey done along with the team, who in return taught and helped me complete my task. After a few meetings, I felt my communication grade up and my confidence rise. They have taught me how to manage time and work on creative ideas. The social work done by Enactus is greatly appreciated by not only the members, but all the businesses that are willing to provide and help. I look forward to expand my knowledge and further helping my team in whichever task provided."
            path="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
            name="Soheli Das"
            desig="Survey Team"
          />
          <Testimonial
            heading="Highlight heading"
            subHeading="It has been around 3 months since I have joined Enactus. Even though I have only been to one survey expedition which was based on the project Anna drishti, i have been engaging in different tasks and gathered much experience through various activities of the club. I have learnt a lot regarding the wastage of food happening in our area and also gathered experience. I was partnered up Gamin Ghaley, and with his help, we successfully conducted the survey research and gathered enough information for project Anna drishti from 5 different restaurants. I have been successfully guided by my team leader and president and I am looking forward to my next task."
            path="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
            name="Suryasnato Mitra"
            desig="Outreach Team"
          />
          <Testimonial
            heading="Highlight heading"
            subHeading="As a member of Enactus, I've learnt to deal with the internal relations and quirks of the local businesses and the people, for various reasons including sponsorships, business ventures or even personal work.
            The team, under the guidance of our team leader, has taught me how to work on ideas and ways to execute them in an orderly manner. They have successfully provided me with support to interact with organizations and people who share a common desire for social work.
            Enactus has pushed me into a direction of doing said social work that would have taken me a long time to execute myself if left alone, for which I am grateful. I look forward to any upcoming projects through which I may learn and contribute to my team, just as they have so far."
            path="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
            name="Adrija Chakrabarti"
            desig="Outreach Team"
          />
          <Testimonial
            heading="Highlight heading"
            subHeading="Even though I haven't been a member of Enactus SMIT for long, I can confidently say that during this relatively short period, my communication and negotiation skills have grown rather exponentially. 
            From going on several survey trips around town and interacting with the locals, to negotiating on potential sponsorships with business owners, I learnt how to quickly think on my feet in the process. On top of that, with the help of our team leader, I also learnt how to effectively cold-email businesses and individuals alike. 
            As such, I quite enjoy being a member of the outreach team, for it gives me a proper opportunity to connect with the locals around town and learn more about them, their problems, and their ways of life. 
            With that being said, I eagerly look forward to picking up new, more meaningful experiences from our upcoming projects."
            path="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
            name="Name Here"
            desig="Survey Team"
          />
        </main>
      </section>
      <div className="">
        <Footer />
      </div>
      
    </main>
  );
};

export default Home;
