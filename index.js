const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 8000;

// Enable CORS for React app running on port 5173
app.use(cors({ origin: 'http://localhost:5173' }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../online-resume/dist')));

// Sample data
const education = [
  { degree: 'Bachelor of Science in Computer Science', institution: 'University of Example', duration: '2016 - 2020' },
  { degree: 'Master of Science in Data Science', institution: 'Example Institute of Technology', duration: '2020 - 2022' },
];

const experience = [
  { title: 'Software Engineer', company: 'Tech Corp', duration: '2022 - Present', description: 'Developed web applications using React and Node.js.' },
  { title: 'Intern', company: 'Startup Inc', duration: '2021 - 2022', description: 'Assisted in building REST APIs and debugging code.' },
];

const overview = {
  name: 'John Doe',
  summary: 'A passionate software engineer with expertise in full-stack development.',
};

// Endpoints
app.get('/getEdu', (req, res) => {
  res.json(education);
});

app.get('/getExp', (req, res) => {
  res.json(experience);
});

app.get('/getOverview', (req, res) => {
  res.json(overview);
});

// Handle all other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../online-resume/dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});