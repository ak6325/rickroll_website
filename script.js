document.addEventListener("DOMContentLoaded", function () {
    const imagesNo = ["images/IMG_1.jpg", "images/IMG_2.jpg", "images/IMG_3.jpg"];
    const imagesGood = ["images/gIMG_1.jpeg", "images/gIMG_2.jpeg"];

    function changeImage() {
        let imgElement = document.getElementById("imgRand");
        if (!imgElement) return;

        let images = imgElement.src.includes("gIMG") ? imagesGood : imagesNo;
        let newImage = images[Math.floor(Math.random() * images.length)];

        imgElement.src = newImage;
    }

    // Auto-load a random image on page load
    changeImage();
});
