import { Link } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const   Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-[#5F6FFF] rounded-lg px-4 sm:px-6 md:px-10 lg:px-12 py-8 md:py-12 gap-8">

            {/* LEFT SIDE */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">

                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-semibold leading-snug">
                    Book Appointment <br /> With Trusted Doctors
                </p>

                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 text-white text-sm sm:text-base font-light">
                    <img
                        className="w-20 sm:w-24"
                        src={assets.group_profiles}
                        alt="profiles"
                    />
                    <p>
                        Simply browse through our extensive list of trusted doctors,
                        <br className="hidden sm:block" />
                        schedule your appointment hassle-free.
                    </p>
                </div>

                <Link to="/doctors">
                    <button className="flex items-center gap-2 bg-white text-gray-700 px-5 py-2.5 rounded-full text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-md">
                        Book Appointment
                        <img className="w-3" src={assets.arrow_icon} alt="arrow" />
                    </button>
                </Link>

            </div>

            {/* RIGHT SIDE */}
            <div className="lg:w-1/2 w-full flex justify-center">
                <img
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto object-contain"
                    src={assets.header_img}
                    alt="header"
                />
            </div>

        </div>
    );
};

export default Hero;