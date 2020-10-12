const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const startCapture = document.getElementById('capture');

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

// Prompt capture when button clicked
startCapture.addEventListener('click', selectMediaStream);

button.addEventListener('click', async() => {
  // Disable the button
  button.disabled = true;
  // Start PiP
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});