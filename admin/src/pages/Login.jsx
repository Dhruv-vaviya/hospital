import { useContext, useState } from 'react'
import {AdminContext} from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { data } from 'react-router-dom'

const Login = () => {

    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setAToken, backendUrl} = useContext(AdminContext)

    const onSubmitHandler = async (event) => {

        event.preventDefault()

        try {
            
            if(state === 'Admin'){
                const {data} = await axios.post(backendUrl + '/api/admin/login', {email,password})
                if(data.success){
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)
                }
            }else{
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.message);
        }

    }

return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-85 sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-xl'>
            <p className='text-2xl font-semibold m-auto'><span className='text-[#5F6FFF]'> {state} </span> Login</p>
            <div className='w-full'>
                <p>Email</p>
                <input
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
            </div>
            <div className='w-full'>
                <p>Password</p>
                <input
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
                className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
            </div>
            <button className='bg-[#5F6FFF] text-white w-full py-2 rounded-md text-base hover:bg-[#3f4eb1]'>Login</button>
            {
                state === 'Admin' 
                ? 
                <p className='text-center text-sm'>Doctor Login? <span onClick={() => setState('Doctor')} className='text-[#5F6FFF] underline cursor-pointer'>Click hear</span></p>
                :
                <p className='text-center text-sm'>Admin Login? <span onClick={() => setState('Admin')} className='text-[#5F6FFF] underline cursor-pointer'>Click hear</span></p>
            }
        </div>
        
    </form>
)
}

export default Login