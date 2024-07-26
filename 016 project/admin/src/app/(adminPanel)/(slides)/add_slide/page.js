'use client'
import React, { Suspense, useState } from 'react'
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function page() {
    const router = new useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const form = e.target;
            const formData = new FormData(form);
            console.log(formData)
            const response = await axios.post('http://localhost:5500/slides/add_slide', formData, {});
            if (response.status !== 200) {
                return alert("something went wrong")
            }
            alert("Slider added successfullly");
            // router.push('/view_slides');
        }
        catch (error) {
            console.log(error);
            alert('something went wrong');
        }
    }

    const [sliderImage, setsliderImage] = useState('Upload File');
    const [selectedImage, setSelectedImage] = useState('https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png');

    const handleImageChange = (event) => {
        const imgArr = (event.target.value).split(`\\`);
        setsliderImage(imgArr[imgArr.length - 1])
        const imageFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage(e.target.result);
        };

        reader.readAsDataURL(imageFile);
    };

    return (
        <>
            <Header />
            <div className='grid grid-cols-[15%_auto] h-[90vh]'>
                <div className='bg-white p-5'>
                    <Sidebar />
                </div>

                <div className='bg-[#f5f7ff] p-10'>
                    <h2 className='text-[30px] font-semibold text-center'>Add Slider</h2>

                    <div className='my-5 p-5 bg-white rounded-md'>
                        <form action="" className='*:my-8' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="sliderHeading">Slider Heading</label>
                                <input type="text" id='sliderHeading' name='sliderHeading' className='border border-1 border-gray-400 p-2' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="sliderSubHeading">Slider Sub-Heading</label>
                                <input type="text" id='sliderSubHeading' name='sliderSubHeading' className='border border-1 border-gray-400 p-2' />
                            </div>
                            <div className='my-4'>
                                <label >Slider Image</label>
                                <div className='flex justify-center items-center p-2 rounded'>
                                    <div className='w-[70%]'>
                                        <div className=' justify-center flex items-center'>
                                            <input type="file" name='sliderImage' accept="image/*" className='w-100 hidden border border-gray-400' id='sliderImage' onChange={handleImageChange} />
                                            <input type="text" readOnly placeholder='Upload File' value={sliderImage} className='px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]' />
                                            <label htmlFor="sliderImage" className='border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px] cursor-pointer'>Uplaod</label>
                                        </div>
                                    </div>
                                    <div className='w-[30%]'>
                                        <img src={selectedImage} alt="" className='w-[200px] mx-auto rounded border' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="sliderDescription">Slider Description</label>
                                <textarea name="sliderDescription" id="sliderDescription" className='border border-1 border-gray-400 p-2'></textarea>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label >Slider Status</label>
                                <div className='flex items-center gap-5 *:flex *:gap-2 px-2'>
                                    <div>
                                        <input type="radio" id='active' value={true} name='status' />
                                        <label htmlFor="active">Active</label>
                                    </div>
                                    <div>
                                        <input type="radio" id='inactive' value={false} name='status' />
                                        <label htmlFor="inactive">Inactive</label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <button type='submit' className='py-2 px-4 rounded border text-xl text-white bg-[#4b49ac]'>Publish</button>
                                <button type='reset' className='py-2 px-4 rounded border text-xl bg-gray-200'>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page 