import img1 from "../assets//assets_frontend/General_physician.svg";
import img2 from "../assets//assets_frontend/Gynecologist.svg";
import img3 from "../assets//assets_frontend/Dermatologist.svg";
import img4 from "../assets//assets_frontend/Pediatricians.svg";
import img5 from "../assets//assets_frontend/Neurologist.svg";
import img6 from "../assets//assets_frontend/Gastroenterologist.svg";



import { Link } from "react-router-dom";

const SpecialityMenu = () => {
return (
    <div className="flex flex-col items-center gap-4 py-15 text-gray-800">
        <h1 className="text-3xl font-medium">Find by Speciality </h1>
        <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
            <Link onClick={()=> scrollTo(0,0)} to="/doctors/General physician" className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4 w-40 hover:scale-105 transition-transform duration-300">
                <img src={img1} alt="General Physician" className="w-16 h-16" />
                <span className="text-sm font-medium">General Physician</span>
            </Link>
            <Link onClick={()=> scrollTo(0,0)} to="/doctors/Gynecologist" className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4 w-40 hover:scale-105 transition-transform duration-300">
                <img src={img2} alt="Gynecologist" className="w-16 h-16" />
                <span className="text-sm font-medium">Gynecologist</span>
            </Link>
            <Link onClick={()=> scrollTo(0,0)} to="/doctors/Dermatologist" className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4 w-40 hover:scale-105 transition-transform duration-300">
                <img src={img3} alt="Dermatologist" className="w-16 h-16" />
                <span className="text-sm font-medium">Dermatologist</span>
            </Link>
            <Link onClick={()=> scrollTo(0,0)} to="/doctors/Pediatricians" className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4 w-40 hover:scale-105 transition-transform duration-300">
                <img src={img4} alt="Pediatrician" className="w-16 h-16" />
                <span className="text-sm font-medium">Pediatrician</span>
            </Link>
            <Link onClick={()=> scrollTo(0,0)} to="/doctors/Neurologist" className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4 w-40 hover:scale-105 transition-transform duration-300">
                <img src={img5} alt="Neurologist" className="w-16 h-16" />
                <span className="text-sm font-medium">Neurologist</span>
            </Link>
            <Link onClick={()=> scrollTo(0,0)} to="/doctors/Gastroenterologist" className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-md p-4 w-40 hover:scale-105 transition-transform duration-300">
                <img src={img6} alt="Gastroenterologist" className="w-16 h-16" />
                <span className="text-sm font-medium">Gastroenterologist</span>
            </Link>
        </div>
    </div>
)
}

export default SpecialityMenu