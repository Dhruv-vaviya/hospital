import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* left */}
                <div className='flex flex-col items-center md:items-start'>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full text-center md:text-left lg:text-left text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/* center */}
                <div>
                    <p className='text-xl font-medium mb-5 text-center'>COMPANY</p>
                    <ul className='flex flex-col text-center gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* right */}
                <div>
                    <p className='text-xl text-center font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col text-center gap-2 text-gray-600'>
                        <li>+91 9313029871</li>
                        <li>dhruvvaviya6@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* Copyright Text */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2024 GreatStack - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer