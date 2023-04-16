import React, { useEffect, useState } from "react";
import CollabCard from "../components/CollabCard";
import Footer from "../components/Footer";
import { storage } from '../firebase';
import {  ref, getDownloadURL} from 'firebase/storage';
const Collaborations = () => {
  const [CollImage, setCollImage] = useState([]);

	useEffect(() => {
	  
	

	const logoRefs = [
		ref(storage, "images/IIC.png"),
		ref(storage, "images/hult_prize.png"),
		ref(storage, "images/Art.png"),
		
	  ];
	  Promise.all(logoRefs.map(getDownloadURL))
		.then((urls) => setCollImage(urls))
		.catch((error) => console.log(error));
	}, []);
  return (
    <div className="h-screen w-auto">
      <h1 className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold
      text-gray-800">
				Collaborations
			</h1>
			<div className="grid md:grid-cols-2 grid-cols-1 lg:justify-evenly px-10 ">
				<CollabCard name="Institute Innovation Council" img={CollImage[0]} />
				<CollabCard
					name="Hult Prize Foundation"
					url="https://www.hultprize.org/"
					img={CollImage[1]}
				/>

        <CollabCard
          name="Art Plant Paint"
          url="https://www.instagram.com/art.plant.paint/?igshid=ZDdkNTZiNTM%3D"
          owner="Tanushka Chauhan"
          img={CollImage[2]}
        />
      </div>
      <div className="flex-1">
        <Footer />
      </div>
    </div>
  );
};

export default Collaborations;
