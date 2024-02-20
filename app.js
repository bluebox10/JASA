const express = require('express');
const multer  = require('multer');
const nodemailer = require('nodemailer');
const app = express();

// Configure multer to handle file uploads
const upload = multer({ dest: 'uploads/' });

// Handle form submission
app.post('/sendEmail', upload.single('image'), (req, res) => {
  // Retrieve form inputs
  const input1 = req.body.input1;
  const input2 = req.body.input2;
  const image = req.file;

  // Compose email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'manutelegram@gmail.com',
      pass: 'Manumanu!16'
    }
  });

  const mailOptions = {
    from: 'manutelegram@gmail.com',
    to: 'Adithyanajish@gmail.com',
    subject: 'Subject of the Email',
    text: `Input 1: ${input1}\nInput 2: ${input2}`,
            attachments: [{
      ilename: image.originalname,
      path: image.path
    }]
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Email could not be sent');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
