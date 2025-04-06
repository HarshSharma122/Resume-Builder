import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResumeItem( {resume} ) {
  return (
    <Link to={'/dashboard/resume/'+resume.resumeid+"/edit"}>
        <div className='p-14 bg-gray-200 flex items-center justify-center h-[280px] border-gray-100 rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-gray-300'>
            <Notebook/>
        </div>
        <h2 className='text-center my-1'>{resume.title}</h2>

    </Link>
  )
}

export default ResumeItem
