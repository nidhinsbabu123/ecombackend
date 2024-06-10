const shops = require("../../models/userModel")

const bcrypt = require('bcrypt');

async function userSignUpController(req, res) {
    try {

        const {email, password, name } = req.body 

        // console.log("req.body", req.body);

        const user = await shops.findOne({email})

        if(user){
            throw new Error("User already exist")
        }

        if (!email) {
            throw new Error("Please provide an email")
        }
        if (!password) {
            throw new Error("Please provide password")
        }
        if (!name) {
            throw new Error("Please provide your name")
        }

        const salt = bcrypt.genSaltSync(10)
        const hashPassword = await bcrypt.hashSync(password, salt)

        if(!hashPassword){
            throw new Error("Something went wrong")
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }
        

        const userData = new shops(payload)

        const saveUser = userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User Created Successfully !"
        })

    } catch (err) {
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignUpController