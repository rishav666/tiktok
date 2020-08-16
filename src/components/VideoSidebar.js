import React,{useState} from 'react'
import PropTypes from 'prop-types'
import "./videosidebar.css"
const VideoSidebar = ({likes,comments,share}) => {
const [liked,setlike]=useState(false)


  return (
    <div className="videosidebar">

  <div className="sidebarbutton">
  <i class="fa fa-heart "></i>

  <p>{likes}</p>

  </div>

    <div className="sidebarbutton">
    <i class="fa fa-comment "></i>
<p>{comments}</p>
    </div>

      <div className="sidebarbutton">
      <i class="fa fa-share "></i>
<p>{share}</p>
      </div>


    </div>
  )
}

export default VideoSidebar
