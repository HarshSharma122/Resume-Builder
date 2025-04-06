import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <div className='p-2 px-5 flex justify-between shadow-md'>
            <img src="/logo.svg" width={80} height={80} />
            {
                isSignedIn ?
                    <div className='text-center flex'>
                        <Link to={'/dashboard'}>
                        <button 
                        varient="outline"className='pr-3'>DashBoard</button>
                        </Link>
                        <UserButton />

                    </div> :
                    <Link to={'/auth/sign-in'}>
                        <button className='bg-[#e63946] px-4
 py-3 text-white'>Get Started</button>
                    </Link>

            }

        </div>
    )
}

export default Header
