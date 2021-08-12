import React from 'react'
import SideCard from '../components/SideCard'

const AboutScreen = () => {
    return (
        <div className='flex'>
            <div className='hidden lg:inline-block w-96 bg-purple-800 my-10 mx-5'>
                <SideCard />
            </div>
            <div className='flex-1 min-h-screen bg-black'></div>
        </div>
    )
}

export default AboutScreen
