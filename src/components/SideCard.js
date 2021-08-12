import React from 'react'
import ProfilePic from '../assets/images/profile-pic.png'

const SideCard = () => {
    return (
        <React.Fragment>
            <img src={ProfilePic} alt='Kamal Sacranie profile pic' className='rounded-full margin' />
        </React.Fragment>
    )
}

export default SideCard
