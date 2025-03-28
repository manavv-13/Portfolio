require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(
  {
    origin :["https://manav-nigam-portfolio.vercel.app"],
    methods:["POST","GET"],
    credentials:true
  }
));

// Email Sender Function
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, 
    pass: process.env.EMAIL_PASS, 
  },
});

app.get("/", (req, res) => {
  res.send("Hello!");
});

//Send email Route
app.post("/send-email", async (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL, 
    to: process.env.EMAIL, 
    subject: `New Contact Form Submission from ${email}`,
    text: `From: ${email}\n\nMessage: ${message}`, 
    replyTo: email,  
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
