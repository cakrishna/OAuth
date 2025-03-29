const express = require('express');
const app = express(); // express is initialised
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 5001;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors()); 
// this makes front end port acess backend.
// for more secure allow only our heders in CORS.
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})