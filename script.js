// This function will extract the 'id' from the URL
function getImageIdFromUrl() {
    const path = window.location.pathname;  // Get the current URL path
    const parts = path.split('/');  // Split the path into parts
    return parts[parts.length - 1];  // The last part should be the id
}

function loadImage() {
    const imageId = getImageIdFromUrl();  // Get the image ID from the URL

    // For simplicity, we assume that any ID will load the same image ('surprise.png').
    // In a real-world app, you'd map different IDs to different images.
    if (imageId) {
        document.getElementById('dynamicImage').src = 'surprise.png';  // Load your image
    } else {
        document.getElementById('dynamicImage').src = '';  // If no ID, clear the image
    }
}

// Run the loadImage function when the page loads
window.onload = loadImage;
