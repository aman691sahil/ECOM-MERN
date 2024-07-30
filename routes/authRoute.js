import express from "express";
import {
  testController,
  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object

const router = express.Router();

//routing

//Register || Method POST

router.post("/register", registerController);

//LOGIN ||POST
router.post("/login", loginController);

//Forgot Password || post
router.post("/forgot-password", forgotPasswordController);

//test routes

//We will only be able to access the given route
//through the token in the authorization headers

//The below route will only accessed by the admin

router.get("/test", requireSignIn, isAdmin, testController);

//protected route

//We are making the dashboard page as private
//protected user auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//We are making admin Auth secured
//protected admin route auth
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//to display orders
router.get('/orders',requireSignIn,getOrdersController);

//all orders-for admin
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
