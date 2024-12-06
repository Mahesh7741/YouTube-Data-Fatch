const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// More permissive CORS configuration
app.use(cors({
    origin: '*', // Be cautious with this in production
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/youtubeVideos';
mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Video Schema
const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    videoId: { type: String, required: true, unique: true },
    date: String,
    likes: String,
    dislikes: String,
    views: String,
    thumbnail: String
}, { timestamps: true });

const Video = mongoose.model('Video', videoSchema);

// Serve static files (if needed)
app.use(express.static('public'));

// Store Video Route
app.post('/api/storeVideo', async (req, res) => {
    const videoData = req.body;

    try {
        // Check if video already exists to prevent duplicates
        const existingVideo = await Video.findOne({ videoId: videoData.videoId });
        if (existingVideo) {
            return res.status(200).json({ message: 'Video already exists', video: existingVideo });
        }

        const newVideo = new Video(videoData);
        const savedVideo = await newVideo.save();
        
        res.status(201).json({ 
            message: 'Video data stored successfully', 
            video: savedVideo 
        });
    } catch (error) {
        console.error("Error storing video data:", error);
        res.status(500).json({ 
            message: 'Error storing video data', 
            error: error.message 
        });
    }
});

// Get all videos route with error handling
app.get('/api/videos', async (req, res) => {
    try {
        const videos = await Video.find().sort({ createdAt: -1 });
        
        // Log the number of videos retrieved
        console.log(`Retrieved ${videos.length} videos`);
        
        res.status(200).json(videos);
    } catch (error) {
        console.error('Error fetching videos:', error);
        res.status(500).json({ 
            message: 'Error fetching videos', 
            error: error.message 
        });
    }
});

// Delete video route
app.delete('/api/deleteVideo/:videoId', async (req, res) => {
    try {
        const result = await Video.findOneAndDelete({ videoId: req.params.videoId });
        
        if (!result) {
            return res.status(404).json({ message: 'Video not found' });
        }
        
        res.status(200).json({ message: 'Video deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting video', error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});