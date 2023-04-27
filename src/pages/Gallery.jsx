import React from "react";
import ImgCard from "../components/ImgCard";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
const Gallery = () => {
	const [Images, setImages] = useState([]);

	useEffect(() => {
		const logoRefs = [
			//array starts from 0
			ref(storage, "images/gallery/1.jpg"),
			ref(storage, "images/gallery/2.jpg"),
			ref(storage, "images/gallery/3.jpg"),
			ref(storage, "images/gallery/4.jpg"),
			ref(storage, "images/gallery/5.jpg"),
			ref(storage, "images/gallery/6.jpg"),
			ref(storage, "images/gallery/7.jpg"),
			ref(storage, "images/gallery/8.jpg"),
			ref(storage, "images/gallery/9.jpg"),
			ref(storage, "images/gallery/10.jpg"),
			ref(storage, "images/gallery/11.jpg"),
			ref(storage, "images/gallery/12.jpg"),
			ref(storage, "images/gallery/13.jpg"),
			ref(storage, "images/gallery/14.jpg"),
			ref(storage, "images/gallery/15.jpg"),
			ref(storage, "images/gallery/16.jpg"),
			ref(storage, "images/gallery/17.jpg"),
			ref(storage, "images/gallery/18.jpg"),
			ref(storage, "images/gallery/19.jpg"),
			ref(storage, "images/gallery/20.jpg"),

			ref(storage, "images/gallery/22.jpg"),
			ref(storage, "images/gallery/23.jpg"),
			ref(storage, "images/gallery/24.jpg"),
			ref(storage, "images/gallery/25.jpg"),
			ref(storage, "images/gallery/26.jpg"),
			ref(storage, "images/gallery/27.jpg"),
			ref(storage, "images/gallery/28.jpg"),
			ref(storage, "images/gallery/29.jpg"),
			ref(storage, "images/gallery/30.jpg"),
			ref(storage, "images/gallery/31.jpg"),
			ref(storage, "images/gallery/32.jpg"),
		];
		Promise.all(logoRefs.map(getDownloadURL))
			.then((urls) => setImages(urls))
			.catch((error) => console.log(error));
	}, []);
	return (
		<div>
			<h1
				className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold
        text-gray-800">
				Gallery
			</h1>
			<div className="grid-col-4">
				<ImgCard img="" name="name" />
			</div>
		</div>
	);
};

export default Gallery;
