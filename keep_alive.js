const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => req.send('Bot is alive!'));

app.listen(port, () => console.log(`Running on ${port}`));
