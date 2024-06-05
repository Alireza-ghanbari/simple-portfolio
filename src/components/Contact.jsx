import React from 'react'
import { CONTACT } from '../constants'

export default function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl font-light'>Get in Touch</h1>
        <div className='text-center tracking-tight font-extralight'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b'>{CONTACT.email}</a>
        </div>
        
    </div>
  )
}
