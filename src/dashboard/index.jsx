import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi';
import ResumeItem from './components/ResumeItem';

function Dashboard() {
  const {user} = useUser();
  const [resumeList, setResumeList] = useState([]);
  useEffect(()=>{
   user&&GetResumesList();
  },[user])
  const GetResumesList = ()=>
  {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(res=>{
      console.log(res.data);
      setResumeList(res.data.data)
    })
  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='text-3xl font-bold'>My Resume</h2>
      <p>Start creating Resume</p>

       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-18 gap-5'>
        <AddResume/>
        {
          resumeList.length>0 && resumeList.map((resume, index)=>
          (
            <ResumeItem resume={resume} key={index}/>
          ))
        }
       </div>
    </div>
  )
}

export default Dashboard
