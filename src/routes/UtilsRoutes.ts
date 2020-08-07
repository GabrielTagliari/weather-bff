import * as express from 'express';

const { name, version } = require('../../package.json');

const router = express.Router();

router.get('/version', (req, res) => {
  res.status(200).json({ name, version });
});

router.get('/healthcheck', (req, res) => {
  return res.status(200).json({ status: 'UP' });
});

export = router;
