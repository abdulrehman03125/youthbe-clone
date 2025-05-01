const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
// const cookieParser = require('cookie-parser');

// Load environment variables

dotenv.config();

// Import routes
// const authRoutes = require('./routes/auth');
// const videoRoutes = require('./routes/videos');
// const userRoutes = require('./routes/users');
// const commentRoutes = require('./routes/comments');

// Load environment variables

dotenv.config();

const port = process.env.PORT || 3000;


// Middleware
const app = express();
app.use(cors());
app.use(express.json());
// app.use(cookieParser());


// Test route  // Root route

app.get('/', (req, res) => {
    res.send('YouTube Clone API is running 🚀');
  });


// Routes

// app.use('/api/auth', authRoutes);
// app.use('/api/videos', videoRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/comments', commentRoutes);




// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server after successful database connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });
  