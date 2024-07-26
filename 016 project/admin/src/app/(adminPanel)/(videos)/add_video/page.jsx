'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function page() {
  const router = new useRouter();

  const [courses, setCourses] = useState([]);
  const [videoData, setVideoData] = useState({});
  const fetchActiveCourses = async (req, res) => {
    const response = axios.get('http://localhost:5500/courses/active_courses')
      .then((response) => {
        setCourses(response.data.data);
      })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((videoData.courseCategory === undefined) || (videoData.courseCategory === 'select')) {
      return alert('please select any course')
    };
    try {
      const response = await axios.post('http://localhost:5500/videos/add_video', videoData);
      if (response.status !== 200) {
        return alert("something went wrong")
      }
      alert("Video added successfullly to Course");
      router.push('/view_videos');

    }
    catch (error) {
      console.log(error);
      alert('something went wrong');
    }
  }
  useEffect(() => {
    fetchActiveCourses();
  }, [])

  return (
    <>
      <Header />
      <div className='grid grid-cols-[15%_auto] h-[90vh]'>
        <div className='bg-white p-5'>
          <Sidebar />
        </div>

        <div className='bg-[#f5f7ff] p-10'>
          <h2 className='text-[30px] font-semibold text-center'>Add Video</h2>

          <div className='my-5 p-5 bg-white rounded-md'>
            <form action="" className='*:my-8' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-2'>
                <label htmlFor="courseCategory">Course Category</label>
                <select required name="courseCategory" id="courseCategory" className='w-full border my-3 border-gray-400 h-[50px]' onChange={(e) => { setVideoData({ ...videoData, courseCategory: e.target.value }) }} >
                  <option value="select" >select</option>
                  {
                    courses.map((value, index) => {
                      return <option value={value._id} key={index}>{value.courseName}</option>
                    })
                  }
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="videoTopic">Video Topic</label>
                <input required type="text" id='videoTopic' name='videoTopic' className='border border-1 border-gray-400 p-2' onChange={(e) => { setVideoData({ ...videoData, videoTopic: e.target.value }) }} />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="videoUrl">Video Url</label>
                <input required type="text" id='videoUrl' name='videoUrl' className='border border-1 border-gray-400 p-2' onChange={(e) => { setVideoData({ ...videoData, videoUrl: e.target.value }) }} />
              </div>
              <div className='flex flex-col gap-2'>
                <label>Video Status</label>
                <div className='flex items-center gap-5 *:flex *:gap-2 px-2'>
                  <div>
                    <input type="radio" id='active' Checked="checked" value={true} name='status' onChange={(e) => { setVideoData({ ...videoData, status: e.target.value }) }} />
                    <label htmlFor="active">Active</label>
                  </div>
                  <div>
                    <input type="radio" id='inactive' value={false} name='status' onChange={(e) => { setVideoData({ ...videoData, status: e.target.value }) }} />
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
        </div >
      </div >
    </>
  )
}

export default page 