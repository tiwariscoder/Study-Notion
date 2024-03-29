import {useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", password: "", confirmPassword: ""})
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    const [accountType, setAccoountType] = useState("student")
    function changeHandler(event){
        const {name,value} = event.target
        setFormData((prevData)=>{
            return{
                ...prevData,
                [name]: value
            }
        })
    }
    function submitHandler(event){
        event.preventDefault()
        if(formData.password!==formData.confirmPassword){
            toast.error("Passwords Do Not Match")
            return
        }
        setIsLoggedIn(true)
        toast.success("Account Created")
        const accountData = {
            ...formData
        }
        const finalData = {
            ...formData,
            accountType
        }
        console.log(accountData)
        console.log(finalData)
        navigate("/dashboard")
    }
  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccoountType("student")}>
                Student
            </button>
            <button className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccoountType("instructor")}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            <div className='w-full flex gap-x-4'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                    <input onChange={changeHandler} required value={formData.firstName} name="firstName" type='text' placeholder='Enter First Name' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input onChange={changeHandler} required value={formData.lastName} name="lastName" type='text' placeholder='Enter Last Name' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
            </div>
            <div className='mt-4'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input onChange={changeHandler} required value={formData.email} name="email" type='email' placeholder='Enter Email Address' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
            </div>
            <div className='w-full flex gap-x-4 mt-4'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input onChange={changeHandler} required value={formData.password} name="password" type={showPassword ? ("text") : ("password")} placeholder='Enter Password' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    <span onClick={()=>setShowPassword(!showPassword)} className='absolute right-3 top-[38px] cursor-pointer'>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input onChange={changeHandler} required value={formData.confirmPassword} name="confirmPassword" type={showPassword ? ("text") : ("password")} placeholder='Confirm Password' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    <span onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className='absolute right-3 top-[38px] cursor-pointer'>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm