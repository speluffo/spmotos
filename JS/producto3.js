document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector("#producto3 .main-image");
    const thumbnails = document.querySelectorAll("#producto3 .thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const imageUrl = this.getAttribute("src");
            mainImage.setAttribute("src", imageUrl);
        });
    });
});
