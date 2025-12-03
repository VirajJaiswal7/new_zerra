import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-mail", async (req, res) => {
  const { name, company, phone, email, sizeQty, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zerrawater@gmail.com",
        pass: "aoijanlucfvfjmdf",
      },
    });

    await transporter.sendMail({
      from: "zerrawater@gmail.com",
      to: "zerrawater@gmail.com",
      subject: "New Contact Inquiry",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Size & Quantity:</strong> ${sizeQty}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Mail error:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
