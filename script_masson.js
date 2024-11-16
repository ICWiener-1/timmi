document.getElementById("spoiler").addEventListener("click", function() {
  var imageContainer = document.getElementById("image-container");
  if (imageContainer.style.display === "none") {
    imageContainer.style.display = "block";
    setTimeout(() => {
      const textDiv = document.createElement('div');
      textDiv.textContent = 'Un petit cousin Masson est en route :)';
      textDiv.style.textAlign = 'center';
      textDiv.style.marginTop = '10px';
      imageContainer.appendChild(textDiv);
    }, 0); // don't wait for the Fernandez !
  } else {
    imageContainer.style.display = "none";
  }
});