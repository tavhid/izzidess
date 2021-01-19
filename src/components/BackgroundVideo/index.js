import React from 'react'
import './index.sass'

const BackgroundVideo = ({video}) => {
  return (
    <div className='video'>
      <video 
        autoPlay='autoPlay' 
        loop='loop' 
        muted 
        className='video__src'>
        <source src={video} type='video/mp4'></source>
      </video>
    </div>
  )
}

export default BackgroundVideo