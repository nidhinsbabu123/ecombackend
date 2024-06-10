// 1.
const express = require('express')


// 3.
const router = new express.Router()

// --
const userSignUpController = require('../Controller/user/userSignUp')
const userSignInController = require('../Controller/user/userSignIn')
const userDetailsController = require('../Controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../Controller/user/userLogout')
const allUsers = require('../Controller/user/allUsers')
const updateUser = require('../Controller/user/updateUser')
const UploadProductController = require('../Controller/product/uploadProduct')
const getProductController = require('../Controller/product/getProduct')
const updateProductController = require('../Controller/product/updateProduct')
const getCategoryProduct = require('../Controller/product/getCategoryProductOne')
const getCategoryWiseProduct = require('../Controller/product/getCategoryWiseProduct')
const getProductDetails = require('../Controller/product/getProductDetails')
const addToCartController = require('../Controller/user/addToCartController')
const countCartProducts = require('../Controller/user/countCartProducts')
const addToCartViewProduct  = require('../Controller/user/addToCartViewProduct')
const updateAddToCartProduct = require('../Controller/user/updateAddToCartProduct')
const deleteAddToCartProduct = require('../Controller/user/deleteAddToCartProduct')
const searchProduct = require('../Controller/product/searchProduct')
const filterProductController = require('../Controller/product/filterProduct')

// ---
router.post("/register", userSignUpController)

// ----
router.post("/login", userSignInController)

// -----
router.get("/user-details", authToken, userDetailsController)

// ------
router.get("/userLogout", userLogout)

// Admin pannel
router.get("/all-user", authToken, allUsers)

router.post("/update-user", authToken, updateUser)

// Uploading product in admin pannel
router.post("/upload-product", authToken, UploadProductController)

// Get products in admin pannel 
router.get("/get-product", getProductController)

// Update Product in admin pannel
router.post("/update-product", authToken, updateProductController)

// get Categories fron the uploaded products
router.get("/get-categoryProduct", getCategoryProduct)

// Get category wise products
router.post("/category-product", getCategoryWiseProduct)

// View a product detail
router.post("/product-details", getProductDetails)

// User Add to cart
router.post("/addtocart", authToken, addToCartController)

// to identify number of products in the cart
router.get("/countCartProducts", authToken, countCartProducts)

// To get unique user
router.get("/view-cart-product", authToken, addToCartViewProduct)

// To update quantity of products by each users
router.post("/update-cart-product", authToken, updateAddToCartProduct)

// delete an Item from the Cart
router.post("/delete-cart-product", authToken, deleteAddToCartProduct)

// Search a particular product through the search box
router.get("/search", searchProduct)

router.post("/filter-product",filterProductController)

// 5.
module.exports = router