import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Now Here We will protect the routes
//We wil show the route only if the token is there
//or not

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    //We have encrypted above 
    //We need to decrypt it as well
    req.user=decode;
    next();
  } catch (err) {
    console.log(err);
  }
};

//admin access

export const isAdmin = async (req, res, next) => {
  try {
    //Here we have to check whether the user is admin or not
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorised Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
        success:false,
        error,
        message:"Error in Admin Middleware"
    })
  }
};
