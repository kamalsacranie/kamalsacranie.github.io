import React from 'react'
import { GrContact } from 'react-icons/gr'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import ExternalLink from '../components/utilities/ExternalLink'
import links from '../data/footerLinks'

const ContactScreen = () => {
    return (
        <div className='bg-yellow-100 -mb-5 flex flex-col items-center' style={{minHeight: 'calc(100vh - 177.33822631835938px)'}}>
            <div className='flex p-10'>
                <GrContact className='flex-shrink-0 w-12 md:w-16 h-12 md:h-16 m-3' /><h1 className='text-5xl md:text-7xl font-serif'>Get Connected</h1>
            </div>
            <div className='container place-content-center text-2xl sm:text-3xl md:text-5xl font-serif grid grid-rows-3 gap-y-8'>
                <div className='container place-items-center md:place-items-start grid grid-rows-2 md:grid-cols-2'>
                    <AiOutlineMail className='md:border-r-2 md:pr-2 border-black md:justify-self-end sm:mr-8' />
                    <ExternalLink link={links.email} content={links.email.slice(7)} />
                </div>
                <div className='container place-items-center md:place-items-start grid grid-rows-2 md:grid-cols-2'>
                    <AiFillLinkedin className='md:border-r-2 md:pr-2 border-black md:justify-self-end sm:mr-8' />
                    <ExternalLink link={links.linkedin} content='My LinkedIn' />
                </div>
                <div className='container place-items-center md:place-items-start grid grid-rows-2 md:grid-cols-2'>
                    <AiFillGithub className='md:border-r-2 md:pr-2 border-black md:justify-self-end sm:mr-8' />
                    <ExternalLink link={links.github} content='My GitHub' />
                </div>
            </div>
        </div>
    )
}

export default ContactScreen
