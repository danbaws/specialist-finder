const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const result = await db.query(
      'SELECT * FROM services WHERE type = $1',
      [type]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;