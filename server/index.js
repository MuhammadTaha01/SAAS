import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import Create from './CRUD Controllers/Create.js'
import Read from './CRUD Controllers/Read.js'
import Update from './CRUD Controllers/Update.js'
import Delete from './CRUD Controllers/Delete.js'
import SendMail from './Email Controllers/SendEmail.js'
// import Location from './Location Controllers/location.js'


const app = express();
const port = 6969;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    // port: '3306',
    database: 'devcrescentia',
    user: 'root',
    password: ''
})

db.connect((err) => {
    if(err)
    {
        console.log('Error while connecting to database: ',err.message)
    }
    else
    {
        console.log('Database connected')
    }
})


app.use('/',Create);
app.use('/',Read);
app.use('/',Update);
app.use('/',Delete);
app.use('/',SendMail);
// app.use('/',Location);


app.get('/',(err,res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})