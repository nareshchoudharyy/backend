'use client'
import React, { useEffect, useState } from 'react'
import Header from '../../../common/Header';
import Sidebar from '../../../common/Sidebar';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

function page() {
    const router = new useRouter();
    const params = useParams();
    const [courseData, setCourseData] = useState({});
    const [thumbnailName, setThumbnailName] = useState('Upload File');
    const [selectedImage, setSelectedImage] = useState('https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png');

    const fetchSingleCourse = async (id) => {
        const response = await axios.get(`http://localhost:5500/courses/view_single_course/${id}`);
        if (response.status == 200) {

            const oldData = response.data.data;
            oldData.status = oldData.status.toString();
            setThumbnailName(oldData.thumbnail)
            setSelectedImage(oldData.thumbnail)
            setCourseData(oldData);
        }
    }
    const handleDataUpdate = (e) => {
        const olddata = { ...courseData };
        olddata[e.target.name] = e.target.value;
        setCourseData(olddata);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const form = e.target;
            const formData = new FormData(form);
            console.log(formData)
            const response = await axios.put(`http://localhost:5500/courses/update_course/${params._id}`, formData);
            if (response.status !== 200) {
                console.log(response)
                return alert("something went wrong")
            }
            router.push('/view_courses');
        }
        catch (error) {
            console.log(error);
            alert('something went wrong');
        }
    }

    const handleImageChange = (event) => {
        const imgArr = (event.target.value).split(`\\`);
        setThumbnailName(imgArr[imgArr.length - 1])
        const imageFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage(e.target.result);
        };

        reader.readAsDataURL(imageFile);
    };

    useEffect(() => {
        fetchSingleCourse(params._id);
    }, [])
    return (
        <>
            <Header />
            <div className='grid grid-cols-[15%_auto] h-[90vh]'>
                <div className='bg-white p-5'>
                    <Sidebar />
                </div>
                <div className='bg-[#f5f7ff] p-10'>
                    <h2 className='text-[30px] font-semibold text-center'>Update Course</h2>

                    <div className='my-5 p-5 bg-white rounded-md'>
                        <form action="" className='*:my-8' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="courseName">Course Name</label>
                                <input type="text" value={courseData.courseName} onChange={handleDataUpdate} id='courseName' name='courseName' className='border border-1 border-gray-400 p-2' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="coursePrice">Course Price</label>
                                <input type="text" value={courseData.coursePrice} onChange={handleDataUpdate} id='coursePrice' name='coursePrice' className='border border-1 border-gray-400 p-2' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="courseDuration">Course Duration</label>
                                <input type="text" value={courseData.courseDuration} onChange={handleDataUpdate} id='courseDuration' name='courseDuration' className='border border-1 border-gray-400 p-2' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="courseDescription">Course Description</label>
                                <textarea name="courseDescription" value={courseData.Description} onChange={handleDataUpdate} id="courseDescription" className='border border-1 border-gray-400 p-2'></textarea>
                            </div>
                            <div className='my-4'>
                                <label >Course Thumbnail</label>
                                <div className='flex justify-center items-center p-2 rounded'>
                                    <div className='w-[70%]'>
                                        <div className=' justify-center flex items-center'>
                                            <input type="file" name='thumbnail' accept="image/*" className='w-100 hidden border border-gray-400' id='thumbnail' onChange={handleImageChange} />
                                            <input type="text" readOnly placeholder='Upload File' value={thumbnailName} className='px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]' />
                                            <label htmlFor="thumbnail" className='border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px] cursor-pointer'>Uplaod</label>
                                        </div>
                                    </div>
                                    <div className='w-[30%]'>
                                        <img src={selectedImage} alt="" className='w-[200px] mx-auto rounded border' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label >Course Status</label>
                                <div className='flex items-center gap-5 *:flex *:gap-2 px-2'>
                                    <div>
                                        <input type="radio" id='active' checked={courseData.status == 'true'} value={'true'} onClick={handleDataUpdate} name='status' />
                                        <label htmlFor="active">Active</label>
                                    </div>
                                    <div>
                                        <input type="radio" id='inactive' checked={courseData.status == 'false'} value={'false'} onClick={handleDataUpdate} name='status' />
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