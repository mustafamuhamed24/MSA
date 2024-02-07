const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' }); // Configure multer for file uploads

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle form submission
app.post('/submit-form', upload.single('pdfFile'), (req, res) => {
    const data = req.body; // Access form data
    const file = req.file; // Access uploaded file

    // Process the data and file here (e.g., save to database, file system, etc.)

    res.send('Data received successfully!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});