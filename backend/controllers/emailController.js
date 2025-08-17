const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { recipients, summary } = req.body;
    if (!recipients || !summary) return res.status(400).json({ message: 'Missing recipients or summary.' });

    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipients,
        subject: 'Meeting Summary',
        text: summary
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent!' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to send email.', error: err.message });
    }
};

module.exports = { sendEmail };
