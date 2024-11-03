document.getElementById("spoiler").addEventListener("click", function() {
    var imageContainer = document.getElementById("image-container");
    if (imageContainer.style.display === "none") {
        imageContainer.style.display = "block";
    } else {
        imageContainer.style.display = "none";
    }
});