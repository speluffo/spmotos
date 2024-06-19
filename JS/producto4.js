document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector("#producto4 .main-image");
    const thumbnails = document.querySelectorAll("#producto4 .thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const imageUrl = this.getAttribute("src");
            mainImage.setAttribute("src", imageUrl);
        });
    });
});

