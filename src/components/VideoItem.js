import React from 'react';
import './VideoItem.css'


const VideoItem = ({ videoItem, onVideoSelect }) => {
    // console.log(videoItem)
    return (
        <div onClick={() => {onVideoSelect(videoItem)}} className="boxCard card" style={{verticalAlign:'center',}}>
            <div className="row no-gutters" style={{verticalAlign:'center'}}>
            <div className="col-auto">
                <img alt={videoItem.snippet.title} style={{width:'180px'}} src={videoItem.snippet.thumbnails.medium.url} className="img-fluid"/>
            </div>
            <div className="col">
                <div className="card-block px-2">
                    <h4 className="text" style={{verticalAlign:'center', fontSize:'18px'}}>{videoItem.snippet.title}</h4>
                </div>
            </div>
            </div>
        </div>
    );
};

export default VideoItem;
