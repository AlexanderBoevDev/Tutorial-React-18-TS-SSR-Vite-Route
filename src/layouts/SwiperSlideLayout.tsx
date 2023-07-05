import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../scss/swiper.scss"

import { Autoplay, Pagination, Navigation } from "swiper";

export const SwiperSlideLayout:React.FC = () => {

	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	// @ts-ignore
	const onAutoplayTimeLeft = (s, time, progress) => {
		// @ts-ignore
		progressCircle.current.style.setProperty("--progress", 1 - progress);
		// @ts-ignore
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return (
		<Swiper
			spaceBetween={ 30 }
			centeredSlides={ true }
			autoplay={{
				delay: 10000,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Autoplay, Pagination, Navigation]}
			onAutoplayTimeLeft={onAutoplayTimeLeft}
			className="mySwiper"
		>
			<SwiperSlide>
				<img className="img-fluid" src="https://dummyimage.com/1300x460/f8f8f8" alt="title"/>
			</SwiperSlide>
			<SwiperSlide>
				<img className="img-fluid" src="https://dummyimage.com/1300x460/f8f8f8" alt="title"/>
			</SwiperSlide>
			<SwiperSlide>
				<img className="img-fluid" src="https://dummyimage.com/1300x460/f8f8f8" alt="title"/>
			</SwiperSlide>
			<div className="autoplay-progress" slot="container-end">
				<svg viewBox="0 0 48 48" ref={ progressCircle }>
					<circle cx="24" cy="24" r="20"></circle>
				</svg>
				<span ref={ progressContent }></span>
			</div>
		</Swiper>
	)
}
