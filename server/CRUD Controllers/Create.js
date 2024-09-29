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


// This function is for the input section on home page
router.post('/subscribed_email', (req,res) => {
    const sql = 'INSERT INTO `subscribed_email` (gmail) VALUES (?)'
    const { gmail } = req.body;

    db.query(sql, [gmail], (err,result) => {
        if(err)
        {
            console.error('Error inserting in database: ',err);
            return res.status(500).send('Error inserting blog');
        }
        else
        {
            console.log('Blog added successfully');
            return res.status(200).send('Blog added')
        }
    });
})




// This function is for add student functionality in gym-management-system
router.post('/add_students',(req,res) => {
    const sql = 'INSERT INTO `gym_addstudents` (student_name, student_mail, student_address, student_contact1, student_contact2, fee, student_gender) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const { student_name, student_mail, student_address, student_contact1, student_contact2, fee, student_gender} = req.body;

    db.query(sql,[student_name, student_mail, student_address, student_contact1, student_contact2, fee, student_gender], (err,result) => {
        if(err)
            {
                console.error('Error inserting in database: ',err);
                return res.status(500).send('Error inserting blog');
            }
            else
            {
                console.log('Blog added successfully');
                return res.status(200).send('Blog added')
            }
    })
})




// router.post('/add_attendance',(req,res) => {
//     const sql = 'INSERT INTO `gym_addstudents` (attendance) VALUES (?)';
//     const { attendance } = req.body;

//     db.query(sql,[attendance], (err,results) => {
//         if(err)
//         {
//             console.error('Error in inserting into db: ',err);
//             return res.json(500).send('Error inserting into db');
//         }
//         else
//         {
//             console.log('Attendance marked');
//             return res.json(200).send('Attendance added');
//         }
//     })
// })


export default router;