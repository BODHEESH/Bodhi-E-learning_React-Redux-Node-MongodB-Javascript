import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import logoBodhi from "../../../assets/logoBlueTransparent.png"
import "./Signup.css"
import OTPInput, { ResendOTP } from "otp-input-react";
import Countdown from 'react-countdown';


function Signup() {
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [confirm, SetConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const [OtpError, setOtpError] = useState('')
    const [OtpModal, setOtpModal] = useState(false)
    const [OTP, setOTP] = useState('');
    const [UserDetails, setUserDetails] = useState({})
    const [Resend, setResend] = useState(false)

    const navigate = useNavigate()



    const handleConfirm = (e) => {
        SetConfirm(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!name) {
                setErrorMessage("Name is required");
            } else if (name.length < 3) {
                setErrorMessage("Name must be atleast 3 characters");
            } else if (!name.match(/^[A-Za-z][A-Za-z ]*$/)) {
                setErrorMessage("Enter a valid name");
            } else if (!email) {
                setErrorMessage("Email is required");
            } else if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
                setErrorMessage("Enter a valid email");
            } else if (!password) {
                setErrorMessage("Password is required");
            } else if (password.length < 4) {
                setErrorMessage("Password must be atleast 4 characters");
            } else if (password.length > 20) {
                setErrorMessage("Password must be less than 20 characters");
            } else if (password != confirm) {
                setErrorMessage("Password does not matched");
            } else {
                const { data } = await axios.post(`http://localhost:5000/register`, {
                    username: name,
                    email: email,
                    password: password
                })
                console.log('data');
                console.log(data);
                if (data) {

                    if (data.user) {
                        setUserDetails(data.user)
                        setOtpModal(true)
                        setTimeout(() => {
                            setResend(true);
                        }, "20000");

                    } else {
                        setErrorMessage(data.msg)
                    }


                    // if (data.user) {
                    //     console.log('redirect to login');
                    //     navigate("/");
                    // } else {
                    //     setErrorMessage(data.msg)
                    // }
                } else {
                    setErrorMessage('Something went wrong')
                }

            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const onVerify = (e) => {
        e.preventDefault()
        const data = {
            OTP: OTP,
            user: UserDetails._id
        }

        if (OTP.length < 6) {
            setOtpError('Enter A 6 digit Otp')
        } else {

            axios.post('http://localhost:5000/verifyOtp', data).then((response) => {
                console.log(response.data)
                if (response.data.verified) {
                    navigate('/')
                }
                setOtpError(response.data.msg)
            })
        }
    }

    const resendOtp = async () => {
        await axios
            .post("http://localhost:5000/resendOtp", UserDetails)
            .then((response) => {
                setResend(!Resend);
                setTimeout(() => {
                    setResend(true);
                }, "180000");
            });
    };




    return (
        <>
            <div className='signupmaindiv'>
                <div className="mb-2  ">
                    <div className="flex justify-center">
                        <img alt="" className="h-14 w-14"
                            src={logoBodhi} />
                    </div>
                    <h5 className="mt-6 text-center text-xl font-extrabold text-gray-900">Signup to create an account
                    </h5>
                    <p className="mt-2 text-center text-md text-gray-600">Already have an account?
                        <Link to='/' className="font-large font-bold text-blue-500 hover:text-blue-900">
                            Login
                        </Link>
                    </p>
                </div>
                <form className='signupForm max-w-[500px] w-full h-max mx-auto rounded-lg p-2 px-8 ' onSubmit={handleSubmit}>
                    {errorMessage && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errorMessage}</div>}
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className='text-white text-bold'>Username</label>
                        <input className='rounded-lg  mt-2 p-2 border border-black hover:bg-purple-50 hover:border-purple-500' type="text" value={name}
                            onChange={(e) => SetName(e.target.value)} />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className='text-white text-bold'>Email</label>
                        <input className='rounded-lg  mt-2 p-2 border border-black hover:bg-purple-50 hover:border-purple-500' type="text" value={email}
                            onChange={(e) => SetEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className=''>Password</label>
                        <input className='p-2 rounded-lg  mt-2  border border-black hover:bg-slate-100 hover:border-purple-500' type="password" value={password}
                            onChange={(e) => SetPassword(e.target.value)} />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label className='text-white text-bold'>Confirm password</label>
                        <input className='rounded-lg  mt-2 p-2 border border-black hover:bg-purple-50 hover:border-purple-500' type="password" value={confirm}
                            onChange={handleConfirm} />
                    </div>

                    <button className='w-full my-5 py-2 bg-blue-600 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40 text-white font-semibold rounded-lg'>Signup</button>

                </form>
            </div>
            {
                OtpModal ?
                    <div className=" absolute w-full h-full backdrop-blur-sm  py-20 px-3 flex items-center">

                        <div className="container mx-auto">
                            <div className="max-w-sm mx-auto md:max-w-lg">
                                <div className="w-full">
                                    <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-64 py-3 rounded text-center">
                                        <h1 className="text-2xl font-bold">OTP Verification</h1>
                                        <div className="flex flex-col mt-4">
                                            <span>Enter the OTP you received at</span>
                                            <span className="font-bold">{UserDetails?.email}</span>

                                        </div>

                                        <div className=" flex justify-center pt-2">
                                            {Resend ? (
                                                null
                                            ) : (
                                                <Countdown date={Date.now() + 600000} />
                                            )}
                                        </div>
                                        <div id="otp" className="flex flex-row justify-center text-center px-4 mt-5">
                                            <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} />
                                        </div>
                                        <p className='text-red-500 font-[8px] mb-3 pl-3'>{OtpError}</p>

                                        <div className="flex justify-center text-center mt-5">
                                           {Resend?
                                           <button className='flex items-center text-green-500 hover:text-white hover:bg-green-500 cursor-pointer font-bold bg-white rounded-lg px-2 py-1 ' onClick={(e) => resendOtp(e)}>Resend</button>:
                                           <button className='flex items-center text-green-500 hover:text-white hover:bg-green-500 cursor-pointer font-bold bg-white rounded-lg px-2 py-1 ' onClick={(e) => onVerify(e)}>Verify</button>
                                           }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default Signup
