import React, { useEffect, useState } from "react";
import { Testimonial } from "../components/Testimonial";
import Footer from "../components/Footer";
import { motion, useScroll, Variants } from "framer-motion";
import { storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";

const cardVariants = {
	offscreen: {
		y: 100,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 1.5,
		},
	},
};

const testimonialVar = {
	offscreen: {
		//  x: 100,
		scale: 0.9,
		opacity: 0,
	},
	onscreen: {
		//  x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			duration: 1.5,
		},
	},
};

const Home = () => {
	const [HomeImages, setHomeImages] = useState([]);

	useEffect(() => {
		const logoRefs = [
			//array starts from 0
			ref(storage, "images/enactus banner.webp"),
			ref(storage, "images/Enactus_Full_Color_logo.png"),
			ref(storage, "images/soheli.webp"),
			ref(storage, "images/surjo.webp"),
			ref(storage, "images/adrija.webp"),
			ref(storage, "images/jatin.webp"),
		];
		Promise.all(logoRefs.map(getDownloadURL))
			.then((urls) => setHomeImages(urls))
			.catch((error) => console.log(error));
	}, []);
	return (
		<main className="relative h-screen w-screen">
			{/*top banner*/}
			<div className=" h-auto w-screen flex">
				<img
					src={HomeImages[0]}
					alt="banner"
					width={8000}
					height={800}
				/>
			</div>

			{/*About us */}
			<article className="mx-8 md:mx-16">
				<motion.div
					className="word-container"
					initial="offscreen"
					whileInView="onscreen"
					variants={cardVariants}
					viewport={{ once: true }}>
					<section className="relative flex flex-col mt-10">
						<div className="flex justify-center mb-10">
							{/*<img src={encRib} width={100} height={20} alt="rib" className="h-16 w-20"  /> */}
							<h1
								className="whitespace-nowrap text-[3rem] md:text-[3.5rem] bg-gradient-to-r lg:text-[5.2rem] font-semibold
            text-gray-800">
								Who We Are
							</h1>
							{/*<img src={encRib} width={100} height={20} alt="rib" className="h-16 w-20"  /> */}
						</div>
						<div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
							<article className="bg-[#ffffffd5] p-8 rounded-3xl">
								<p className="text-justify md:text-[1.2rem] lg:text-[1.5rem] text-gray-900 font-medium indent-20 mt-8 leading-relaxed">
									<span className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] font-semibold">
										Enactus{" "}
									</span>
									is a network of global leaders that use
									effective business strategies for positive
									social and environmental impact. It is a
									non-profit organisation that uses the United
									Nations 17 Sustainable Development Goals as
									a framework to bring about a change and
									create a better world for everyone. Enactus
									SMIT is a newly formed chapter of this
									global platform. Since our establishment in
									2022, we&apos;ve been actively working on
									our first project
									<span className="lg:text-[1.6rem] font-semibold">
										{" "}
										अन्न-Drishti
									</span>
									. Backed by a strong core team and
									supportive local businesses, we aim to make
									our surroundings more sustainable than ever.
								</p>
							</article>
							<div className="relative grid place-items-center">
								<img src={HomeImages[1]} alt="pic" />
							</div>
						</div>
					</section>
				</motion.div>

				{/*Enactus word break */}
				<motion.div
					className="word-container"
					initial="offscreen"
					whileInView="onscreen"
					variants={cardVariants}
					viewport={{ once: true }}>
					<section
						className="flex-col w-full h-auto bg-white border-4 border-yellow-400 rounded-lg mt-20
        border-x-[20px] md:border-x-[80px]">
						<article className="flex-col w-[50%] mx-auto my-10">
							<div>
								<h1 className="text-slate-900 text-xl md:text-3xl font-semibold">
									<span className="text-yellow-600">En</span>
									trepreneurial
								</h1>
								<p className="text-md md:text-xl font-medium ">
									Having the perspective to see an opportunity
									and the talent to create calue from that
									opportunity.
								</p>
							</div>
							<div>
								<h1 className="text-slate-900 text-xl md:text-3xl font-semibold">
									<span className="text-yellow-600">Act</span>
									ion
								</h1>
								<p className="text-md md:text-xl font-medium ">
									The willingness to do something and the
									commitment to see it through even when the
									outcome is not guaranteed.
								</p>
							</div>
							<div>
								<h1 className="text-yellow-600 text-xl md:text-3xl font-semibold">
									Us
								</h1>
								<p className="text-md md:text-xl font-medium ">
									A group of people who see themselves
									connected in some important way; individuals
									that are part of a greater whole.
								</p>
							</div>
						</article>
					</section>
				</motion.div>

				{/*testimonials*/}
				<motion.div
					className="testi-container"
					initial="offscreen"
					whileInView="onscreen"
					variants={cardVariants}
					viewport={{ once: true }}>
					<section className="flex-col w-full h-auto pb-4 mt-20">
						<div className="flex justify-center mb-10">
							{/*} <img src={encRib} width={100} height={20} alt="rib" className="h-16 w-20" /> */}
							<h1 className=" whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[5.2rem] font-semibold text-gray-800">
								Testimonials
							</h1>
							{/*<img src={encRib} width={100} height={20} alt="rib" className="h-16 w-20"  /> */}
						</div>
						<motion.div
							className="review-container"
							initial="offscreen"
							whileInView="onscreen"
							variants={testimonialVar}>
							<main className="grid md:grid-cols-2 gap-4 md:gap-10">
								<Testimonial
									subHeading="My idea of team-work was unclear before joining Enactus. Upon joining, I got my first survey done along with the team, who in return taught and helped me complete my task. After a few meetings, I felt my communication grade up and my confidence rise. They have taught me how to manage time and work on creative ideas. The social work done by Enactus is greatly appreciated by not only the members, but all the businesses that are willing to provide and help. I look forward to expand my knowledge and further helping my team in whichever task provided."
									path={HomeImages[2]}
									name="Soheli Das"
									desig="Survey Team"
								/>
								<Testimonial
									subHeading="It has been around 3 months since I have joined Enactus. Even though I have only been to one survey expedition which was based on the project Anna drishti, i have been engaging in different tasks and gathered much experience through various activities of the club. I have learnt a lot regarding the wastage of food happening in our area and also gathered experience. I was partnered up Gamin Ghaley, and with his help, we successfully conducted the survey research and gathered enough information for project Anna drishti from 5 different restaurants. I have been successfully guided by my team leader and president and I am looking forward to my next task."
									path={HomeImages[3]}
									name="Suryasnato Mitra"
									desig="Survey Team"
								/>
								<Testimonial
									subHeading="As a member of Enactus, I've learnt to deal with the internal relations and quirks of the local businesses and the people, for various reasons including sponsorships, business ventures or even personal work.
              The team, under the guidance of our team leader, has taught me how to work on ideas and ways to execute them in an orderly manner. They have successfully provided me with support to interact with organizations and people who share a common desire for social work.
              Enactus has pushed me into a direction of doing said social work that would have taken me a long time to execute myself if left alone, for which I am grateful. I look forward to any upcoming projects through which I may learn and contribute to my team, just as they have so far."
									path={HomeImages[4]}
									name="Adrija Chakrabarti"
									desig="Outreach Team"
								/>
								<Testimonial
									subHeading="After joining Enactus I learned the essence of working as a group which is oriented towards the same goal, constantly striving towards it. This being my first experience was truly a blessing.
                  Everyone's view and conviction to create a better and richer world which all of us constantly work towards."
									path={HomeImages[5]}
									name="Jatin Sharma"
									desig="Media and Communications"
								/>
							</main>
						</motion.div>
					</section>
				</motion.div>
			</article>
			<div className="">
				<Footer />
			</div>
		</main>
	);
};

export default Home;
