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



router.get('/gym_externalservices', (req, res) => {
  const sql = 'SELECT * FROM gym_externalservices';
  
  db.query(sql, (err, result) => {
      if (err) {
          console.error('Error fetching external services: ', err);
          return res.status(500).send('Error fetching external services');
      } else {
          return res.status(200).json(result);
      }
  });
});




// Get student by ID
router.get('/get-student/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM gym_addstudents WHERE id = ?';
    
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error fetching student:', err);
        return res.status(500).send('Error fetching student');
      }
      
      if (result.length === 0) {
        return res.status(404).send('Student not found');
      }
      
      res.status(200).json(result[0]);
    });
  });
  

export default router;