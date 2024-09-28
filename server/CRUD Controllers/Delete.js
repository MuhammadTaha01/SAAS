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



// Add this delete route to your Express app
router.delete('/delete-student/:id', (req, res) => {
    const studentId = req.params.id;
    const sql = 'DELETE FROM `gym_addstudents` WHERE id = ?';
    
    db.query(sql, [studentId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error in deleting student' });
        } else {
            return res.status(200).json({ message: 'Student deleted successfully' });
        }
    });
});



export default router;