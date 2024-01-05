const express = require('express');
const path = require('path');

const app = express();

// ... other middleware or route setups ...

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
// Example: app.use('/api/jobs', jobsRouter);

// The catchall handler: for any request that doesn't
// match one above, send back the React app's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

