import { useContext, useEffect, useState } from "react"
import { AdminContext } from "../../context/AdminContext"
import EditDoctorModal from "../../components/EditDoctorModal"

const DoctorsList = () => {

    const { doctors, aToken, getAllDoctors, changeAvailability, deleteDoctor } = useContext(AdminContext)
    const [selectedDoctor, setSelectedDoctor] = useState(null)

    useEffect(() => {
        if (aToken) {
            getAllDoctors()
        }
    }, [aToken])

    const handleDelete = async (docId, docName) => {
        if (!window.confirm(`Are you sure you want to delete Dr. ${docName}?`)) return
        await deleteDoctor(docId)
    }


    return (
        <div className="m-5 max-h-[90vh] overflow-y-scroll">

            <h1 className="text-lg font-medium">All Doctors</h1>

            <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
                {doctors.map((item, index) => (
                    <div
                        className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group"
                        key={index}
                    >
                        <img
                            className="bg-indigo-50 group-hover:bg-[#5F6FFF] transition-all duration-500"
                            src={item.image}
                            alt=""
                        />
                        <div className="p-4">
                            <p className="text-neutral-800 text-lg font-medium">{item.name}</p>
                            <p className="text-zinc-600 text-sm">{item.speciality}</p>

                            <div className="mt-2 flex items-center gap-1 text-sm">
                                <input
                                    onChange={() => changeAvailability(item._id)}
                                    type="checkbox"
                                    checked={item.available}
                                />
                                <p>Available</p>
                            </div>

                            {/* ✅ Edit & Delete buttons */}
                            <div className="mt-3 flex gap-2">
                                <button
                                    onClick={() => setSelectedDoctor(item)}
                                    className="flex-1 text-xs border border-[#5F6FFF] text-[#5F6FFF] py-1 rounded-full hover:bg-[#5F6FFF] hover:text-white transition-all"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item._id, item.name)}
                                    className="flex-1 text-xs border border-red-400 text-red-400 py-1 rounded-full hover:bg-red-500 hover:text-white transition-all"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ✅ Edit Modal — only shown when a doctor is selected */}
            {selectedDoctor && (
                <EditDoctorModal
                    doctor={selectedDoctor}
                    onClose={() => setSelectedDoctor(null)}
                />
            )}
        </div>
    )
}

export default DoctorsList