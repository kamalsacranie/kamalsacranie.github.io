import React from 'react'
import SideCard from '../components/SideCard'

const AboutScreen = () => {
    return (
        <div className='flex bg-yellow-100 rounded-l-3xl'>
            <div>
                <SideCard />
            </div>
            <div className='flex-1 mb-10'>
                <h1>Hello</h1>
            </div>
        </div>
    )
}

export default AboutScreen
