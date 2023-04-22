require('dotenv').config();
const sgMail = require('@sendgrid/mail');

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL_1, TO_EMAIL_2  } = process.env;
sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  const { name, email, message } = req.body;
  const msg = {
    to: [TO_EMAIL_1, TO_EMAIL_2],
    from: FROM_EMAIL,
    subject: 'Contact',
    html: `
    <div style="
        font-size: 24px;
        color: white;
        background: #1E2129;
        text-align: center;
        ">
        DATES</div>
        <div style="
          font-size: 18px;
          background: #1E2129;
          padding: 10px;
        ">
        <div style="color: white"><b>Full name: </b>${name}</div>
        <div style="color: white"><b>Email: </b>${email}</div>  
        <div style="color: white"><b>About us project: </b>${message}</div>
    </div>`,
  };
  await sgMail.send(msg);
  res.status(200).json({ success: true });
}
