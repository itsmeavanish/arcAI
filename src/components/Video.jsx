import React from 'react'
import back from "../assets/2792370-hd_1920_1080_30fps.mp4"
const Video = () => {
  return (
    <div>
       <video 
              className="absolute top-0 left-0 w-full h-full object-cover z-0" 
              autoPlay 
              loop 
              muted
            >
              <source src={back} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
    </div>
  )
}

export default Video
