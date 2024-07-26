const nodemailer = require('nodemailer');
const otpSave = require("./../../support/otpdata/otpMap")
require('dotenv').config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ADMIN_MAIL,
        pass: process.env.ADMIN_APP_PASSWORD
    }
})
const generateOtp = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ 'message': 'no email found' });
        const generateOtp = () => {
            let OTP = Math.floor(Math.random() * 1000000);
            const otpStr = OTP.toString();
            if (otpStr.length < 6) {
                generateOtp();
            }
            return OTP
        }
        const OTP = generateOtp();
        otpSave.set(email, OTP);
        const options = {
            from: process.env.ADMIN_MAIL,
            to: email,
            subject: 'OPT for registration',
            text: `${OTP} is your one time password for registration to our learning website`
        }
        transporter.sendMail(options, (error, success) => {
            if (error) console.log(error)
            if (error) return res.status(501).json({ message: 'cannot generate otp' })
            res.status(200).json({ 'message': 'OTP generated successfully', data: OTP });
            console.log('otp successfully sent');
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ 'message': 'internal server error' });
    }
}
module.exports = generateOtp;