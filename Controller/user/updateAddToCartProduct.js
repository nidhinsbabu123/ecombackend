const addToCartModel = require("../../models/cartProduct")

const updateAddToCartProduct = async (req, res) => {
    try{
        const currentUserId = req.userId

        const addToCartProductId = req?.body?._id

        const qty = req.body.quantity

        const updateProduct = await addToCartModel.updateOne({_id : addToCartProductId},{
            ...(qty && {quantity : qty})
        })

        res.json({
            data : updateProduct,
            message : "Quantity Updated",
            success : true,
            error : false
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = updateAddToCartProduct