const shops = require("../models/userModel")

const uploadProductPermission = async(userId) => {
    const user = await shops.findById(userId)

    if(user.role !== 'ADMIN'){
        return false
    }

    return false
}

module.exports = uploadProductPermission