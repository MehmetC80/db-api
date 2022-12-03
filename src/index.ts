import express from 'express';



import dotenv from 'dotenv';
dotenv.config();


import getAll from './routes/db.routes';



const app = express();
const port = process.env.PORT;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// const postRouter = require('./routes/post.routes');

app.get('/', (req, res) => {
    res.send('Hallo das ist die erste Nachicht');
});

//Routes

//user routes


//post routes
app.use('/api', getAll);


app.listen(port, () => {
    console.log(`server läuft auf http://localhost:${port} !!!`);
});