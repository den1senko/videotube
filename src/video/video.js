import React from 'react';

import './video.css';

const Video = (props) => {
    const video = props.video;
    
    if(!video){
        return <div>Загрузка...</div>;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="col-12">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <h6 className="mt-4">{ video.snippet.title }</h6>
                <p>{ video.snippet.description }</p>
                <div className="container-fluid mb-4">
                    <div className="row">
                        <h6 className="col-8 p-0"><i class="fas fa-user"></i> { video.snippet.channelTitle }</h6>
                        <p className="p-0 ml-auto"><i class="fas fa-eye"></i> 789456</p>
                        <p className="p-0 ml-auto"><i class="fas fa-thumbs-up"></i> 4321</p>
                        <p className="p-0 ml-auto"><i class="fas fa-thumbs-down"></i> 165</p>
                        <p className="p-0 ml-auto"><i class="fas fa-comment-alt"></i> 110</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;