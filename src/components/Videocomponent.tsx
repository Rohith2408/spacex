import React from 'react';

const VideoComponent = () => {
    
  return (
    <div>
      <video controls width="600">
        <source src="https://pixabay.com/videos/satellite-communication-space-37713/" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;