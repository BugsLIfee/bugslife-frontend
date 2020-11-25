import React, { Component } from 'react';

import "./css/main.css";
const ScreenShareBtn= (props)=>{
const localVideo = React.createRef();
  // render() {
      const constraints = {
    video: {
      width: 1980, // 최대 너비
      height: 1080, // 최대 높이
      frameRate: 10, // 최대 프레임
    },
  };
  let localStream = null;
      function getCrossBrowserScreenCapture() {
    if (navigator.getDisplayMedia) {
      return navigator.getDisplayMedia(constraints);
    } else if (navigator.mediaDevices.getDisplayMedia) {
      return navigator.mediaDevices.getDisplayMedia(constraints);
    }
  }
function screnhandlerStart(callback) {
    getCrossBrowserScreenCapture().then(
      (stream) => {
        console.log('Success getDisplayMedia', stream);
        localStream = stream;
        callback(localStream);
      },
      (error) => {
        console.error('Error getDisplayMedia', error);
      }
    );
  }
  function screnhandlerEnd(callback) {
    localStream.getTracks().forEach((track) => {
      track.stop();
    });

    callback && callback();
  }

    function setVideoStream(data) {
      const video = data.el;
      video.srcObject = data.stream;
     }

    function onLocalStream(stream) {
      console.log('onLocalStream', stream);

      setVideoStream({
        el: localVideo,
        stream: stream,
      });
    }

    function startScreenShare() {
    screnhandlerStart((stream) => {
      onLocalStream(stream);
    });
  }

    return (
      <div>
          <div id="content">
            <div class="wrap">
              <button id="btn-start" onClick={()=>startScreenShare()}>화면공유 시작</button>
              <video id="local-video" ref={localVideo} autoplay/>
            </div>
          </div>

      </div>
    );
  // }
}

export default ScreenShareBtn;



