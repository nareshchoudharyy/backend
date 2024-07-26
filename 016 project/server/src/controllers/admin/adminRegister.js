const Admin = require("../../models/admin/Admin");


let ifRegistered = false;
const adminRegister = async (req, res) => {
    try {

        if (ifRegistered) return;

        const ifAdmin = await Admin.findOne();

        if (ifAdmin !== null) return console.log('Admin exists : ', ifAdmin);

        let mail = process.env.ADMIN_EMAIL;
        let password = process.env.ADMIN_PASSWORD;

        if (!mail || !password) return console.log('please provide admin email and password in dotEnv file');

        const adminData = new Admin({
            mail,
            password
        })

        const response = await adminData.save();
        console.log(response)
        ifRegistered = true;

        console.log('successfully saved details of Admin')
    }
    catch (error) {
        console.log(error)
    }
}
module.exports = adminRegister;