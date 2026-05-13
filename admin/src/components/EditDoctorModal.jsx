import { useContext, useState } from "react"
import { AdminContext } from "../context/AdminContext"

const EditDoctorModal = ({ doctor, onClose }) => {

    const { updateDoctor } = useContext(AdminContext)

    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState(doctor.name)
    const [email, setEmail] = useState(doctor.email)
    const [experience, setExperience] = useState(doctor.experience)
    const [fees, setFees] = useState(doctor.fees)
    const [about, setAbout] = useState(doctor.about)
    const [speciality, setSpeciality] = useState(doctor.speciality)
    const [degree, setDegree] = useState(doctor.degree)
    const [address1, setAddress1] = useState(doctor.address?.line1 || '')
    const [address2, setAddress2] = useState(doctor.address?.line2 || '')
    const [loading, setLoading] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData()
        formData.append('docId', doctor._id)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('experience', experience)
        formData.append('fees', Number(fees))
        formData.append('about', about)
        formData.append('speciality', speciality)
        formData.append('degree', degree)
        formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))
        if (docImg) formData.append('image', docImg)

        const success = await updateDoctor(doctor._id, formData)
        setLoading(false)
        if (success) onClose()
    }

    return (
        // Backdrop
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">

            <div className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-scroll p-8 relative">

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
                >
                    ✕
                </button>

                <p className="text-lg font-medium mb-6">Edit Doctor</p>

                <form onSubmit={onSubmitHandler}>

                    {/* Image upload */}
                    <div className="flex items-center gap-4 mb-6 text-gray-500">
                        <label htmlFor="edit-doc-img">
                            <img
                                className="w-16 bg-gray-100 rounded-full cursor-pointer object-cover"
                                src={docImg ? URL.createObjectURL(docImg) : doctor.image}
                                alt=""
                            />
                        </label>
                        <input
                            onChange={(e) => setDocImg(e.target.files[0])}
                            type="file"
                            id="edit-doc-img"
                            hidden
                        />
                        <p>Click image to change photo</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 text-gray-600">

                        {/* Left column */}
                        <div className="flex-1 flex flex-col gap-4">

                            <div className="flex flex-col gap-1">
                                <p>Doctor Name</p>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="border rounded px-3 py-2"
                                    type="text" required
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <p>Doctor Email</p>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border rounded px-3 py-2"
                                    type="email" required
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <p>Experience</p>
                                <select
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    className="border rounded px-3 py-2"
                                >
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i} value={`${i + 1} Year`}>{i + 1} Year</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p>Fees</p>
                                <input
                                    value={fees}
                                    onChange={(e) => setFees(e.target.value)}
                                    className="border rounded px-3 py-2"
                                    type="number" required
                                />
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="flex-1 flex flex-col gap-4">

                            <div className="flex flex-col gap-1">
                                <p>Speciality</p>
                                <select
                                    value={speciality}
                                    onChange={(e) => setSpeciality(e.target.value)}
                                    className="border rounded px-3 py-2"
                                >
                                    <option>General physician</option>
                                    <option>Gynecologist</option>
                                    <option>Dermatologist</option>
                                    <option>Pediatricians</option>
                                    <option>Neurologist</option>
                                    <option>Gastroenterologist</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p>Education</p>
                                <input
                                    value={degree}
                                    onChange={(e) => setDegree(e.target.value)}
                                    className="border rounded px-3 py-2"
                                    type="text" required
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <p>Address</p>
                                <input
                                    value={address1}
                                    onChange={(e) => setAddress1(e.target.value)}
                                    className="border rounded px-3 py-2"
                                    placeholder="Address line 1" required
                                />
                                <input
                                    value={address2}
                                    onChange={(e) => setAddress2(e.target.value)}
                                    className="border rounded px-3 py-2"
                                    placeholder="Address line 2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="mt-4">
                        <p className="mb-2">About Doctor</p>
                        <textarea
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            className="w-full px-4 pt-2 border rounded"
                            rows={4} required
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#5F6FFF] text-white px-10 py-3 rounded-full disabled:opacity-60"
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="border px-10 py-3 rounded-full text-gray-500 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditDoctorModal