import React from 'react';
import VideoItem from './VideoItem';
import './VideoItem.css'

const VideoList = ({videos, onVideoSelect}) => {
    
    console.log(videos)

    const renderedList = videos.map((video) => {
        console.log(video.snippet.title)
        return(
            <VideoItem 
            key={video.id.videoId}
            onVideoSelect={onVideoSelect} 
            videoItem={video} />
        ) 
    });
    
    return(

        <div>{renderedList}</div>
    );
}

export default VideoList;

