const nodemailer = require('nodemailer');

// Create an asynchronous function
const sendEmail = async (msg, email) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'snehdholia001@gmail.com', // Your email address
      pass: 'tfbo crej mcev kkbf', // Your password
    },
  });

  // Email content
  let mailOptions = {
    from: 'snehdholia001@gmail.com', // Sender address
    to: email, // List of recipients
    subject: 'YOUR CODE', // Subject line
    text: msg, // Plain text body
  };

  // Send email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
};

module.exports = sendEmail;
