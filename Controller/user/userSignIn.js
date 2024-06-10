const shops = require('../../models/userModel')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {

        const { email, password } = req.body

        if (!email) {
            throw new Error("Please provide an email")
        }
        if (!password) {
            throw new Error("Please provide password")
        }

        const user = await shops.findOne({email})

        if(!user){
            throw new Error("User not found. Please sign-up")
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        console.log("checkPassword : ", checkPassword);

        if(checkPassword){

            const tokenData = {
                _id : user._id,
                email : user.email,
            }

            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8});

            const tokenOption = {
                httpOnly : true,
                secure : true
            }

            res.cookie("token", token, tokenOption).status(200).json({
                message : "Login Success",
                data : token,
                success : true,
                error : false
            })

        }else{
            throw new Error("Password incorrect")
        }

    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignInController