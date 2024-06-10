const shops = require("../../models/userModel");

async function allUsers(req, res) {
    try{

        console.log("User Id : ", req.userId);

        const allUsers = await shops.find()


        res.json({
            message : "All User Showing",
            data : allUsers,
            success : true,
            error : false
        })

    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}

module.exports = allUsers