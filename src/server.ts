import App from './app';

require('dotenv').config()

const PORT = process.env.SERVER_PORT || 8000;

App.app.get('/', (req, res) => res.send('Express + TypeScript Server is cool!'));

App.app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

module.exports = App.app;