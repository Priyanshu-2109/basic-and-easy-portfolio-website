const textArray = ["AVID LEARNER", "TECH ENTHUSIASTIC", "OPTIMISTIC", "FULL STACK DEVELOPER"];
let currentIndex = 0;

const changingTextElement = document.querySelector(".changing-text");

function changeText() {
    changingTextElement.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(changeText, 1200);

changeText();

//Project 1 images changing JS
document.addEventListener("DOMContentLoaded", () => {
    const projectImage = document.getElementById("projectImage");
  
    // List of image file names inside the Project1 folder
    const images = [
      "project1.png",
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg",
    ];
  
    const basePath = "images/Project1/";
  
    let currentImageIndex = 0;
  
    function changeImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length; // Loop back to the first image 
      //image is the array in which the images name are stored
      projectImage.src = basePath + images[currentImageIndex];
    }
  
    setInterval(changeImage, 2000);
  });
  