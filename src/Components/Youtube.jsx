import React, { useState } from 'react';

function YouTubeVideo() {
  const [showVideo, setShowVideo] = useState(true);

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div className='p-10 items-center  flex flex-wrap justify-center  h-20'>
      {!showVideo ? (
        <button className='bg-red-600' onClick={handleClick}>Play Video</button>
      ) : (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-KJZCYW_pN8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default YouTubeVideo;
