import React from 'react'
import encSmit from "../imgs/Enactus-SMIT-white.png"

const Home = () => {
  return (
    <main className="mx-16 h-screen w-auto">
      <section>
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

      <section className=" grid grid-cols-2 md:gap-2 lg:gap-10 ">
        <article className="flex flex-col">
          <h1 className="whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[5.2rem] font-semibold">Who We Are</h1>
          <p className="text-justify md:text-[1.2rem] lg:text-[1.5rem] text-gray-900 font-medium indent-20 mt-8 leading-relaxed">
            <span className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] font-semibold">Enactus </span> 
            is a network of global leaders that use effective business strategies
            for positive social and environmental impact. It is a non-profit organisation
            that uses the United Nations 17 Sustainable Development Goals as a framework
            to bring about a change and create a better world for everyone.
            Enactus SMIT is a newly formed chapter of this global platform. Since our
            establishment in 2022, we&apos;ve been actively working on our first project
            <span className="lg:text-[1.6rem] font-semibold"> अन्न-Drishti</span>. Backed by a strong core team and supportive local businesses,
            we aim to make our surroundings more sustainable than ever.
          </p>
        </article>
        <div className="place-content-center grid w-[300px] md:w-[400px] lg:w-[700px]">
          <img
            src = {encSmit}

            alt = "pic"
          />
        </div>
      </section>
    </main>
  )
}

export default Home