import React, { useEffect, useState } from 'react'
import Footer from '../Common/Footer'
import HeaderTwo from '../Common/HeaderTwo'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Register() {
    const [data, setData] = useState({});

    //fir showing error in the registratino form
    const [errors, setErrors] = useState({});

    //if checked terms and conditions
    const [useApproved, setUserApproved] = useState(false);

    // otp
    const [otpBtn, setOtpBtn] = useState(false);
    const [ifOtp, setifOtp] = useState(false);
    const [otpBtnText, setOtpBtnText] = useState('Generate Otp');

    const formValidation = () => {
        const newObj = {};

        //check email validation
        const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
        const ifEmail = emailPattern.test(data.email);

        if (!ifEmail) {
            newObj.email = 'Please enter valid email';
        }

        //password validation
        const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,14}$/;
        const ifPass = passwordPattern.test(data.password);
        console.log(data.password, ifPass)

        if (!ifPass) {
            newObj.pass = 'Please include at least one lower case, one upper case, special charactor, minimum length 8 and maximum 14'
        }


        //confirm password validation
        const ifCpass = !(data.password === data.cpassword);
        if (ifCpass) {
            newObj.cpass = "Confirm password doesn't match password"
        }

        //setting the error in useState
        setErrors(newObj)
        const keysLength = Object.keys(newObj).length;
        if (keysLength === 0) {
            return true;
        } else {
            return false;
        }
    }
    const handleFormSubmittion = (e) => {
        e.preventDefault()
        const ifFormValid = formValidation();
        if (!ifFormValid) {
            setTimeout(() => {
                setErrors({});
            }, 4000);
            return
        };
        if (!useApproved) return alert('Accept Terms & Conditions to continue')
        try {
            //fetch user registration api here
        }
        catch (error) {
            alert('Something went wrong')
        }
    }

    const hendleOtpGeneration = async () => {
        setOtpBtn(true);
        setifOtp(true);

        let otpCounter = 5;
        setOtpBtnText(`resend OTP in ${otpCounter}s`);
        otpCounter--;

        const otpInterval = setInterval(() => {
            setOtpBtnText(`resend OTP in ${otpCounter}s`);
            if (otpCounter < 1) {
                clearInterval(otpInterval);
                setOtpBtnText('Generate OTP');
                setOtpBtn(false);
            }
            otpCounter--;
        }, 1000);
        try {
            console.log(data)
            const response = await axios.post('http://localhost:5500/otp/generate_otp', { email: data.email })
            console.log(response);
            if (response.status !== 200) return alert('something went wrong');
        }
        catch (error) {
            console.log(error)
            alert('something went wrong');
        }
    }
    useEffect(() => {
        console.log(data, useApproved)
    }, [data, useApproved])
    return (
        <>
            <HeaderTwo />
            <section class=" ">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleFormSubmittion}>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                                    {errors.email && <span className='text-[red]'>{errors.email}</span>}
                                </div>

                                <button type="button" disabled={otpBtn} onClick={hendleOtpGeneration} class="w-full font-medium bg-gray-300 rounded-lg text-sm px-5 py-2.5 text-center">{otpBtnText}</button>

                                <div className={`${ifOtp ? 'block' : 'hidden'}`}>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input onChange={(e) => { setData({ ...data, password: e.target.value }) }} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        {errors.pass && <span className='text-[red]'>{errors.pass}</span>}
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                        <input onChange={(e) => { setData({ ...data, cpassword: e.target.value }) }} type="password" name="cpassword" id="cpassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        {errors.cpass && <span className='text-[red]'>{errors.cpass}</span>}
                                    </div>
                                    <div>
                                        <label for="otp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">OTP</label>
                                        <input type="otp" name="otp" id="otp" placeholder="Enter OTP" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => { setData({ ...data, otp: e.target.value }) }} required="" />
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input checked={useApproved} onChange={() => { setUserApproved(!useApproved) }} id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <label for="remember" class="text-gray-500 dark:text-gray-300">I accept the Terms and Conditions</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="w-full font-medium bg-gray-300 rounded-lg text-sm px-5 py-2.5 text-center ">Create An Account</button>
                                    <p class="text-sm font-light text-gray-300 dark:text-gray-300">
                                        Already have an account? <Link to={'/login'} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Register