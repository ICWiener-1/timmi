document.getElementById("spoiler").addEventListener("click", function() {
  var imageContainer = document.getElementById("image-container");
  if (imageContainer.style.display === "none") {
    imageContainer.style.display = "block";
    setTimeout(() => {
      const textDiv = document.createElement('div');
      textDiv.textContent = '(Je vais être maman)';
      textDiv.style.textAlign = 'center';
      textDiv.style.marginTop = '10px';
      imageContainer.appendChild(textDiv);
    }, 2000); // wait for 2 seconds before adding the text
  } else {
    imageContainer.style.display = "none";
  }
});