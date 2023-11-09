const nodemailer = require('nodemailer');

// Create a transporter object using the Gmail SMTP server
// const transporter = nodemailer.createTransport({
//
//   host: 'smtp-relay.gmail.com',
//   port: 465, // Use 465 for SSL or 587 for TLS
//   secure: true, // Use SSL/TLS
//
//   auth: {
//     // user: "hotelmotelclubofficial@gmail.com",
//     // pass: "qfzrlhjvbmpkelyf",
//     user: 'contact@outsidetheboxbook.com', // Your custom domain email address
//     pass: 'qcmb djni ezwq nizm', // Your email password or application-specific password
//   },
// });

var transporter = nodemailer.createTransport(({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'admin@hotelmotelclub.com',
    pass: 'qcmbdjniezwqnizm'
  }
}));

// Email data
const mailOptions = {
  from: 'admin@hotelmotelclub.com', // Use your custom domain email address
  to: 'admin@hotelmotelclub.com',
  subject: 'Subject of the email',
  text: 'Text content of the email',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error: ' + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

