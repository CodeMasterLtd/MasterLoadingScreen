document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('background-music');
    let currentImageIndex = 0;
    let images = [
        "images/background1.jpg",
        "images/background2.jpg",
        "images/background3.jpg",
        "images/background4.jpg",
        "images/background5.jpg"
    ]

    // Function to toggle play/pause
    const togglePlayPause = () => {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    };

    // Add event listener for keydown to detect space bar press
    document.addEventListener('keydown', (event) => {
        if (event.code === 'space') {
            togglePlayPause();
        }
    });

    // Function to change the background image
    const changeBackgroundImage = () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    };

    // Initial background image
    document.body.style.backgroundImage = `url(${images[0]})`;

    // Change background image every 5 seconds
    setInterval(changeBackgroundImage, 5000);

    // Debugging lines to check if elements are loaded correctly
    console.log('Audio element:', audioElement);
    console.log('Images:', images);
});
