import nodemailer from 'nodemailer';
import express from 'express'

const router = express.Router();


router.post('/send_welcome_email', async (req, res) => {
  const { student_email, student_name } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nouolreply@gmail.com',
        pass: 'taazefoqmuddkova'
      }
    });

    const mailOptions = {
      from: 'nouolreply@gmail.com',
      to: student_email,
      subject: 'Welcome to the Gym!',
      text: `Hello ${student_name}, welcome to our Gym!`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});


export default router;