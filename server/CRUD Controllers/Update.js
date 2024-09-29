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




// Update student fee status
router.put('/update_fee_status_students/:id', (req, res) => {
    const { id } = req.params;
    const { fee_status } = req.body;

    // Update student fee in the MySQL database
    const sql = 'UPDATE gym_addstudents SET fee_status = ? WHERE id = ?';

    db.query(sql, [fee_status, id], (err, result) => {
        if (err) {
            console.error('Error updating student fee:', err);
            return res.status(500).send('Error updating student fee');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Student not found');
        }

        res.status(200).json({ message: 'Student fee updated successfully' });
    });
});




export default router;