// install exprees to create backend/APIs
import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('server is running on port 3000!!');
});

// in the terminal run: node api/index.js
// to run the server
// to stop the server: ctrl + c
// add the type module in package.json to run the server with ES6 syntax
// to load changes in real time install nodemon
// add nodemon script in package.json -> "dev": "nodemon api/index.js",
    // and "start": "node api/index.js"
// to run the server with nodemon run: npm run dev
