import React from 'react'
import PropTypes from 'prop-types'
import "./videofooter.css"
import Ticker from "react-ticker"
const VideoFooter = ({channel,description,song}) => {
  return (
<div className="videofooter">

    <div className="VideoFooter-text">
        <h3>@{channel}</h3>
        <p>{description}</p>

          <span><i class=" fa fa-music"></i> </span> <div className="ticker">
              <Ticker mode="smooth">
                 {({ index }) => (
                     <>
                         <p>{song}</p>
                     </>
                 )}
             </Ticker>
            </div>
    </div>
  


    <img className="logo" src="https://static.thenounproject.com/png/934821-200.png"/>
</div>
  )
}

export default VideoFooter
