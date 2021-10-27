const express = require('express');
const path = require('path');

const app = express();

const joinedPath = path.join(__dirname, 'public');
console.log(joinedPath);

const stat = express.static(joinedPath);

app.use(stat);

app.listen(3000, () => console.log('listening on port 3000'));
