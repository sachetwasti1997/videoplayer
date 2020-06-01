import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {

    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="boxDetail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title={video.snippet.title} className="embed-responsive-item" src={videoSrc} allowFullScreen></iframe>
            </div>
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    );
}

export default VideoDetail;