const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    password: "yourpassword",
  },
});

const mailOptions = {
  from: "youremail@gmail.com",
  // Mulitple Receivers
  to: "myfriendsemail@hotmail.com, myotherfriend@yahoo.com",
  subject: "Ich schicke Dir eine Email via NodeJS",
  text: "Das ist ja einfach!!!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
