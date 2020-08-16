import React,{useRef,useState} from 'react'
import PropTypes from 'prop-types'
import './video.css'
import VideoFooter from "./VideoFooter.js"
import VideoSidebar from "./VideoSidebar.js";

const Video = ({channel,description,song,video,comments,share,likes}) => {
  const [playing,setPlaying]=useState(false)
  const videoRef = useRef(null);
  const onVideoPress=()=>{

    if(playing){
  videoRef.current.pause();
  setPlaying(false)
    }
    else{
      videoRef.current.play();
      setPlaying(true);
    }

  }
  return (
   <div className="video">
   <video  className="video__player"
   loop
   onClick={onVideoPress}
   ref={videoRef}
    src={video}>
   </video>
   <VideoFooter channel={channel} description={description} song={song}/>
   <VideoSidebar comments={comments} share={share} likes={likes} />
   </div>
  )
}

export default Video
