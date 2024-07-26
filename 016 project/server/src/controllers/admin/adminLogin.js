const Admin = require("../../models/admin/Admin");

const adminLogin = async (req, res) => {
    try {
        const ifMail = await Admin.findOne({ mail: req.body.mail });

        if (!ifMail) return res.status(400).json({ message: "No such email found" });
        if (ifMail.password !== req.body.password) return res.status(401).json({ message: "Invalid Password" });

        const { password, __v, ...adminData } = ifMail._doc;
        // jwt.sign({ ifMail }, process.env.JWT_KEY, { expiresIn: 60 * 60 * 24 * 7 }, (error, token) => {
        //     if (error) return res.status(500).json({ message: "error in log in" })
        //     res.status(200).json({ message: 'login successfully', data: adminData, auth: token });
        // })
        // jwt
        res.status(200).json({ message: 'login successfully', data: adminData })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'internal server error' });
    }
}
module.exports = adminLogin;