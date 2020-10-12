const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream, pass it to video element, play

const selectMediaStream = async() => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener('click', async() => {
  // Disable the button
  button.disabled = true;
  // Start PiP
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});


// On Load
selectMediaStream();