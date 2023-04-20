
import io from "socket.io-client"
import { useEffect } from 'react'

export default function Home() {
  const socket = io('http://localhost')


  useEffect(()=>{

    socket.emit('join-room', 5)
    socket.on("user-connected", userid =>{
      console.log('User Connected: ' + userid)
    })

    const myVideo = document.createElement('video')
    myVideo.muted = true

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream=>{
      addVideoStream(myVideo, stream)
    })
  })
  return (
    <div>Hello</div>
    
  )

  function addVideoStream(video: HTMLVideoElement, stream: MediaStream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
      video.play()
    })
    document.body.append(video)
  }
}
