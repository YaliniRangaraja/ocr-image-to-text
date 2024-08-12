// Get DOM elements
const fileInput = document.getElementById('fileInput');
const processButton = document.getElementById('processButton');
const outputText = document.getElementById('outputText');

// Function to process image using Tesseract.js
const processImage = () => {
    const file = fileInput.files[0];
    
    if (file) {
        outputText.textContent = 'Processing...';

        // Use Tesseract.js to recognize text
        Tesseract.recognize(
            file,
            'eng', // Language code (English)
            {
                logger: info => console.log(info) // Log progress
            }
        ).then(({ data: { text } }) => {
            outputText.textContent = text; // Display the recognized text
        }).catch(error => {
            console.error(error);
            outputText.textContent = 'An error occurred during processing.';
        });
    } else {
        outputText.textContent = 'Please select an image file.';
    }
};

// Add event listener to button
processButton.addEventListener('click', processImage);
