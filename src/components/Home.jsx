import React from 'react'
import './HOME.css'


const Home = () => {
  return (
    <div className='cont'>
        <div className="up">
            <h1>My Portfolio</h1>
            
        </div>
        <div className="main">
        <div className="content">
              <h1  className='kunal'>Hi! I'm <span>Kunal</span></h1>
        <h1 className='web'> Web Develepor </h1>
        <h1 className='amaze'>Amazing UI awaits you</h1>
        </div>
          <img src="/images/PHOTO.jpeg" alt="" />
        </div>
      
    </div>
  )
}

export default Home
