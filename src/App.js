import React,{useState,useEffect} from 'react';
import './App.css';
import Video from "./components/Video"
import video from "./components/tiktok2.mp4"
import db from "./firebase";

function App() {
  const [videos,setVideos]=useState([]);

useEffect( ()=>{

  db.collection("videos").onSnapshot((snapshot)=>
  setVideos(snapshot.docs.map((doc)=>doc.data()))
);
},[]);


  return (
    <div className="App">

     <div className="app__videos">
       {videos.map(
           ({ channel, description, song, likes, comments, share,url }) => (
             <Video
               video={url}
               channel={channel}
               song={song}
               likes={likes}
               comments={comments}
               description={description}
               share={share}
             />
           )
         )}
     </div>
    </div>
  );
}

export default App;
