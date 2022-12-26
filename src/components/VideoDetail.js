import React from "react";

const VideoDetail = ({video}) => {
    // Conditional Rendering
    if (!video) {
        return <div>Loading..</div>;
    }

    const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="Video pLayer" src={VideoSrc} ></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;