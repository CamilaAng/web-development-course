// References img element inside #photo-display
var photoDisplayImg = document.querySelector("#photo-display img");

// References all .thumbnail elements and iterates each one
document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
    // Changes src and alt attributes for
    // photoDisplayImg based on given thumbnail
    var selectImg = () => {
        // References img element inside thumbnail
        var img = thumbnail.querySelector("img");
        // Changes src attribute
        photoDisplayImg.src = img.src;
        // Changes alt attribute
        photoDisplayImg.alt = img.alt;
    };
    // Sets click event for each thumbnail
    thumbnail.onclick = selectImg;
});