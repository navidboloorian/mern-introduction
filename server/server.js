// const express = require('express');
// const cors = require('cors');
// const env = require('dotenv');
// const db = require('./db/conn');

// const app = express();
// const port = process.env.PORT || 5000;

// env.config({path: './config.env'});

// app.use(cors());
// app.use(express.json());
// app.use(require('./routes/record'));

// app.listen(port, () => {
//     db.connectToServer((err) => {
//         if (err) console.log(err);
//     });

//     console.log(`Server is running on port: ${port}`);
// });