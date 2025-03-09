const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const servicesRoutes = require('./routes/services');
const bookingsRoutes = require('./routes/bookings');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/images', express.static(path.join(__dirname, 'images')));
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/services', servicesRoutes);
app.use('/api/bookings', bookingsRoutes);

app.listen(PORT, () => {
  console.log(`SERVERUL A PLECATTTT PE SMECHERIA ASTA DE PORT: ${PORT}`);
});