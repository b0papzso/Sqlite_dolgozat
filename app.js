import express from 'express'
import bodyParser from 'body-parser';
import bookRouter from './routes/books.js'
import { initializeDB } from './database.js';

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use("/books", bookRouter)
app.use((err, req, res, next) => {
    console.log(err.message)
})

const startServer = async () => {
    await initializeDB();
    app.listen(3000, () => console.log("Szerver fut a 3000-es porton!"));
};

startServer();