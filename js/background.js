const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const image = document.createElement("img");
image.src = `img/${chosenImage}`;

const firstdiv = document.querySelector("#mainSpace");
firstdiv.appendChild(image);