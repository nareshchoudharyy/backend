'use client'
import { Suspense, useEffect, useState } from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function page() {
  const router = new useRouter();
  const [videoData, setVideoData] = useState([]);
  const [filePath, setFilePath] = useState('');
  const getVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5500/videos/view_videos');
      console.log(response.data.data)
      if (response.status !== 200) return alert('Something went wrong');
      setVideoData(response.data.data);
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
    const response = await axios.put(`http://localhost:5500/videos/change_video_status/${id}`, newStatus);
    getVideos()
    if (response.status !== 200) return alert('Something went wrong');
  }
  const handleUpdate = (e) => {
    const id = e.target.value;
    router.push(`/update_video/${id}`);
  }
  const deleteVideo = async (e) => {
    const id = e.target.value;
    const confirmation = confirm('Are you sure you want to delete this Course');
    if (confirmation) {
      const response = await axios.delete(`http://localhost:5500/videos/delete_video/${id}`);
      getVideos()
      if (response.status !== 200) return alert('Something went wrong');
    }
    else {
      alert('course not deleted')
    }
  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <>
      <Header />
      <div className='grid grid-cols-[15%_auto] h-[90vh]'>
        <div className='bg-white p-5'>
          <Sidebar />
        </div>
        <div className='bg-[#f5f7ff] p-10'>
          <h2 className='text-[30px] font-semibold text-center'>View Videos</h2>
          <div className='my-5 p-5 bg-white rounded-md'>
            <table className='w-[100%] text-center'>
              <thead>
                <tr className='*:border *:border-slate-600'>
                  <th>S.no</th>
                  <th>Course Name</th>
                  <th>Video Topic</th>
                  <th>Video Url</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  videoData.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.courseCategory.courseName}</td>
                        <td>{value.videoTopic}</td>
                        <td>{value.videoUrl}</td>
                        <td>
                          <button value={value._id} className={`py-1 px-2 rounded mx-2 text-white ${value.status ? 'bg-[#22c55e]' : "bg-[#f87171]"}`} onClick={changeStatus}>{value.status ? 'Active' : "Inactive"}</button>
                        </td>
                        <td className='*:py-1 *:px-2 *:rounded *:mx-2'>
                          <button value={value._id} className='bg-[#22c55e] text-white' onClick={handleUpdate}>Edit</button>
                          <button value={value._id} className='bg-[#f87171] text-white' onClick={deleteVideo}> Delete</button>
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