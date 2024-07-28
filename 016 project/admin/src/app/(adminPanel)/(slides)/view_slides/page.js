'use client'
import { Suspense, useEffect, useState } from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function page() {
    const router = new useRouter();
    const [SlideData, setSlideData] = useState([]);
    // const [coursesToDelete, setCoursesToDelete] = useState([]);
    const [filePath, setFilePath] = useState('');
    const getSlides = async () => {
        try {
            const response = await axios.get('http://localhost:5500/slides/view_slides');
            if (response.status !== 200) return alert('Something went wrong');
            setSlideData(response.data.data);
            setFilePath(response.data.filePath);

        } catch (error) {
            console.log(error);
            alert('Something went wrong');
        }

    }
    const changeStatus = async (e) => {
        const id = e.target.value;
        const newStatus = {
            status: (e.target.textContent == 'Active') ? false : true
        }
        const response = await axios.put(`http://localhost:5500/slides/change_status/${id}`, newStatus);
        getSlides()
        if (response.status !== 200) return alert('Something went wrong');
    }
    const handleUpdate = (e) => {
        const id = e.target.value;
        router.push(`/update_course/${id}`);
    }
    const deleteCourse = async (e) => {
        const id = e.target.value;
        const confirmation = confirm('Are you sure you want to delete this Slide');
        if (confirmation) {
            console.log(id)
            const response = await axios.delete(`http://localhost:5500/slides/delete_slide/${id}`);
            getSlides()
            if (response.status !== 200) return alert('Something went wrong');
        }
        else {
            alert('slide not deleted')
        }
    }
    // const deleteAllCourses = (e) => {
    //     console.log(e.target.value)
    //     const data = SlideData.map((value) => {
    //         return value._id;
    //     })
    //     console.log(data)
    // }
    useEffect(() => {
        getSlides();
    }, [])

    return (
        <>
            <Header />
            <div className='grid grid-cols-[15%_auto] h-[90vh]'>
                <div className='bg-white p-5'>
                    <Sidebar />
                </div>
                <div className='bg-[#f5f7ff] p-10'>
                    <h2 className='text-[30px] font-semibold text-center'>View Slides</h2>
                    <div className='my-5 p-5 bg-white rounded-md'>
                        <table className='w-[100%] text-center'>
                            <thead>
                                <tr className='*:border *:border-slate-600'>
                                    <th>S.no</th>
                                    {/* <th>
                                        <input type="checkbox" name="" id="" onClick={deleteAllCourses} />
                                        Delete
                                    </th> */}
                                    <th>Slide Heading</th>
                                    <th>Slide Sub Heading</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    SlideData.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                {/* <td>
                                                    <input type="checkbox" name="" value={value._id} id={value._id} />
                                                </td> */}
                                                <td>{value.sliderHeading}</td>
                                                <td>{value.sliderSubHeading}</td>
                                                <td>{value.sliderDescription}</td>
                                                <td>
                                                    <img src={filePath + value.sliderImage} alt="" className='w-[100px]' />
                                                </td>
                                                <td>
                                                    <button value={value._id} className={`py-1 px-2 rounded mx-2 text-white ${value.status ? 'bg-[#22c55e]' : "bg-[#f87171]"}`} onClick={changeStatus}>{value.status ? 'Active' : "Inactive"}</button>
                                                </td>
                                                <td className='*:py-1 *:px-2 *:rounded *:mx-2'>
                                                    <button value={value._id} className='bg-[#22c55e] text-white' onClick={handleUpdate}>Edit</button>
                                                    <button value={value._id} className='bg-[#f87171] text-white' onClick={deleteCourse}> Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    )
}

export default page 