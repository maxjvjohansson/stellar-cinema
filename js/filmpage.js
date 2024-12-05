//Ticket counter
const ticketNumber = document.getElementById("ticketNumber");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

plusButton.addEventListener("click", () => {
  let currentNumber = parseInt(ticketNumber.textContent, 10);
  if (currentNumber <= 9) {
    ticketNumber.textContent = currentNumber + 1;
  }
});

minusButton.addEventListener("click", () => {
  let currentNumber = parseInt(ticketNumber.textContent, 10);
  if (currentNumber > 1) {
    ticketNumber.textContent = currentNumber - 1;
  }
});

//Video Button change:
const video = document.getElementById("trailerVideo");
const playButton = document.getElementById("playButton");

// Play the video and hide the custom button when clicked
playButton.addEventListener("click", () => {
  video.play();
  playButton.style.display = "none";
  video.setAttribute("controls", "controls");
});

// Show the play button again when the video ends
video.addEventListener("ended", () => {
  playButton.style.display = "block";
});

//Carousel Function:
const stillsContainer = document.querySelector(".stillsContainer");
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");

// Define the scroll amount per click (adjust as needed)
const scrollAmount = 266.667;

// Scroll left when the left arrow is clicked
leftArrow.addEventListener("click", () => {
  stillsContainer.scrollLeft -= scrollAmount;
});

// Scroll right when the right arrow is clicked
rightArrow.addEventListener("click", () => {
  stillsContainer.scrollLeft += scrollAmount;
});

//Border to dateBox code:
const dateBoxes = document.querySelectorAll(".dateBox");

// Variable to track the currently selected dateBox
let selectedDateBox = null;

// Add click event listener to each dateBox
dateBoxes.forEach((dateBox) => {
  dateBox.addEventListener("click", () => {
    // Remove border from previously selected dateBox, if any
    if (selectedDateBox) {
      selectedDateBox.style.border = "none";
    }

    // Add border to the clicked dateBox
    dateBox.style.border = "5px solid #337ab7";

    // Update the selectedDateBox variable
    selectedDateBox = dateBox;
  });
});

// Video-to-Image
//Changes the trailer for images stills and back.
const videoContainer = document.querySelector(".videoContainer");
const trailerImage = document.querySelector(".trailerImage");
const stills = document.querySelectorAll(".still");

const posterImage = "assets/movie_stills/Trailer Image.png";

// Function to show an image in place of the video
function showImage(src) {
  // Hide the video and play button
  if (!video.paused) {
    video.pause();
    video.currentTime = 0; // Reset video to the beginning
  }

  video.style.display = "none";
  playButton.style.display = "none";

  // Check if an image already exists in the container
  let selectedImage = document.querySelector(".selectedImage");
  if (!selectedImage) {
    // Create an image element dynamically
    selectedImage = document.createElement("img");
    selectedImage.classList.add("selectedImage");
    selectedImage.style.width = "100%";
    selectedImage.alt = "Selected Still";
    videoContainer.appendChild(selectedImage);
  }

  // Update the image source
  selectedImage.src = src;
  selectedImage.style.display = "block";
}

// Function to restore the video
function restoreVideo() {
  // Hide the selected image
  const selectedImage = document.querySelector(".selectedImage");
  if (selectedImage) {
    selectedImage.style.display = "none";
  }

  // Show the video and play button
  video.style.display = "block";
  playButton.style.display = "block";
  video.setAttribute("poster", posterImage);
}

// Attach event listeners
stills.forEach((still) => {
  still.addEventListener("click", () => {
    showImage(still.src);
  });
});

trailerImage.addEventListener("click", restoreVideo);

// Play button functionality
playButton.addEventListener("click", () => {
  video.play();
  playButton.style.display = "none"; // Hide the play button once video starts
});
