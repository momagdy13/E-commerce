import React from 'react'
import './NewsLetters.css'

export default function NewsLetters() {
  return (
    <div className='news-letters'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our new letter and stay update</p>
        <div>
            <input type="email" placeholder='Enter Yore Email Id' />
            <button> Subscribe</button>
        </div>
    </div>
  )
}
