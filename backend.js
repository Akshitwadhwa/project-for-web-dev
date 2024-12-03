const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3000;

const app = express();

// Serve static files (like CSS, JS, images) from the current directory
app.use(express.static(__dirname));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://akshit:akshit@cluster0.lpqp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connection successful'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Define Mongoose schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobileno: Number,
    Event: String,
});

const Users = mongoose.model('data', userSchema);

// Define the route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html')); // Correct method to send an HTML file
});


app.post('/post', async (req, res) => {
    const { name, email, mobileno, Event } = req.body;
    try {
        const user = new Users({ name, email, mobileno, Event });
        await user.save();
        console.log(user);
        res.send("Form Submission Successful");
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).send("An error occurred while submitting the form.");
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users); 
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send("An error occurred while fetching the users.");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});