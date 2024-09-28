import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const router = express.Router();

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devcrescentia'
})

router.get('/view-student',(req,res) => {
    const sql = 'SELECT * FROM `gym_addstudents`'
    db.query(sql,(err,result) => {
        if(err)
        {
            console.error(err);
            return res.status(500).json({message:`Error in fetching students data`})
        }
        else
        {
            return res.status(200).json(result)
        }
    })
})

export default router;