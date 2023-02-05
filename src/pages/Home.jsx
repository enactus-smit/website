import React from 'react'
import encSmit from "../imgs/Enactus-SMIT-white.png"

const Home = () => {
  return (
    <main>
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
      <section className="container mx-auto py-10">
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed malesuada lacus eget nisi aliquam, in congue elit faucibus. 
            Praesent id enim dapibus, viverra dolor at, molestie sapien. 
          </p>
        </div>
        <div className="w-64 h-44">
          <img src= {encSmit} alt="sideimg" />
        </div>
      </div>
    </section>
    </main>
  )
}

export default Home