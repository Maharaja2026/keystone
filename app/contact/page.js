import React from "react"
import Image from "next/image"
import Location from "../components/contact/location"
import ContactForm from "../components/contact/contactForm"
import SocialsBanner from "../components/contact/socialBanner"

const Contact = () => {
	return (
		<main className="w-full">
			<div className="relative top-16 md:top-0 h-[300px] md:h-[400px]">
				<Image
					src="/contactUS.jpg"
					alt="Gym interior with exercise equipment"
					width={1920}
					height={1080}
					priority
					className="w-full h-full object-cover object-center"
				/>
				<h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] md:left-[30%] lg:left-[25%] text-white uppercase text-4xl sm:text-6xl md:text-8xl tracking-wide text-center">
					Contact us
				</h1>
			</div>
			<section className="max-w-[1440px] mx-auto flex flex-col gap-10 md:flex-row py-24 px-10">
				<Location/>
				<ContactForm/>
			</section>
			<SocialsBanner/>
		</main>
	)
}

export default Contact
