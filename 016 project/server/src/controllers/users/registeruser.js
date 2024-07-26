const otpSave = require("../../support/otpdata/otpMap");

const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const otp =Number(req.body.otp)
        const sentOtp = 123123;
        // const sentOtp = otpSave.get(email);
          
        console.log(otp);
        console.log(otp != sentOtp);

        if(!otp) return res.status(401).json({'message':"please provide an otp"})
        if(otp != sentOtp) return res.status(401).json({'message':"invalid otp"})

        // user model = User;
        res.status(200).json({ message: 'user registered successfully' });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'internal server error' });
    }
}
module.exports = registerUser;