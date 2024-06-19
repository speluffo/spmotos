document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector("#producto6 .main-image");
    const thumbnails = document.querySelectorAll("#producto6 .thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const imageUrl = this.getAttribute("src");
            mainImage.setAttribute("src", imageUrl);
        });
    });
});
