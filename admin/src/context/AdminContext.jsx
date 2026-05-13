import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(
        localStorage.getItem('aToken')
            ? localStorage.getItem('aToken')
            : '')

    const [doctors, setDoctors] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllDoctors = async () => {
        try {

            const { data } = await axios.post(backendUrl + '/api/admin/all-doctors', {}, { headers: { aToken } })

            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    const updateDoctor = async (docId, formData) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/admin/update-doctor',
                formData,
                { headers: { atoken: aToken } }
            )
            if (data.success) {
                toast.success(data.message)
                await getAllDoctors()  // refresh list
                return true
            } else {
                toast.error(data.message)
                return false
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            return false
        }
    }

    const deleteDoctor = async (docId) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/admin/delete-doctor',
                { docId },
                { headers: { atoken: aToken } }
            )
            if (data.success) {
                toast.success(data.message)
                await getAllDoctors()  // refresh list
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    const changeAvailability = async (docId) => {

        try {
            const { data } = await axios.post(backendUrl + '/api/admin/change-availability', { docId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllDoctors()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message);
        }

    }

    const value = {
        aToken,
        setAToken,
        backendUrl,
        doctors,
        getAllDoctors,
        changeAvailability,
        updateDoctor,
        deleteDoctor
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider