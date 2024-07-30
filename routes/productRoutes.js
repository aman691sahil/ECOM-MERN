//This is all the backend routes we have

import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import braintree from "braintree";

// The express-formidable package in npm is a middleware for handling form data, especially file uploads, 
// in Express applications. It is built on top of the formidable library, 
// which is a Node.js module for parsing form data, particularly file uploads.


const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//update product
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get  All products
//this will not fetch the photo we have \
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
//for photo we have created a seperate endpoint
router.get("/product-photo/:pid", productPhotoController);
//We are getting the photo on the basis of the pid i.e product id

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//to filter the products
router.post('/product-filters',productFiltersController);

//product-counter
router.get('/product-count',productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product in the search bar
router.get('/search/:keyword',searchProductController);

//similar-products on the basis of product and category id
router.get('/related-product/:pid/:cid',realtedProductController);

//category wise prouct display
router.get('/product-category/:slug',productCategoryController);

//payment routes
//We will fetch the token from braintree
router.get('/braintree/token',braintreeTokenController);

//payments
router.post('/braintree/payment',requireSignIn,brainTreePaymentController)

export default router;