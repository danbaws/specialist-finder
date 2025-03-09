const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  try {
    const {
      serviceId,
      serviceType,
      name,
      phone,
      address,
      problemDescription,
      date,
      time
    } = req.body;

    const result = await db.query(
      `INSERT INTO bookings 
      (service_id, service_type, client_name, client_phone, address, description, booking_date, booking_time, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *`,
      [serviceId, serviceType, name, phone, address, problemDescription, date, time, 'pending']
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;