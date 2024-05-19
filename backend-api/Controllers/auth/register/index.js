const bcrypt = require("bcryptjs");
const { validateEmail, FreelancerSignupSchema, adminSignupSchema, ClientSignupSchema } = require("../validate");
const User = require("../../../models/User");
const ClientSchema = require("../../../models/Client");

const MSG = {
  usernameExists: "Username is already taken.",
  emailExists: "Email is already registered.",
  signupSuccess: "You are successfully signed up.",
  signupError: "Unable to create your account.",
};

const register = async (userRequest, role, res) => {
  try {
    let signupRequest;
    let emailNotRegistered;
    // validation
    if (role === "admin") {
      signupRequest = await adminSignupSchema.validateAsync(userRequest);
    } else if (role === "freelancer") {
      signupRequest = await FreelancerSignupSchema.validateAsync(userRequest);
    }
    else if (role === "client") {
      signupRequest = await ClientSignupSchema.validateAsync(userRequest);
    }
    else {
      throw new Error("Invalid role provided.");
    }

    emailNotRegistered = await validateEmail(signupRequest.email);
    if (!emailNotRegistered) {
      return res.status(400).json({
        message: MSG.emailExists,
        success: false,
      });
    }

    const password = await bcrypt.hash(signupRequest.password ? signupRequest.password : 'Hello@lnb123', 12);
    const newUser = new User({
      ...signupRequest,
      password,
      role,
    });

    await newUser.save();

    if (role == "client") {
      const newClient = new ClientSchema({
        user: newUser._id,
        companyName: signupRequest.company,
        status: "Pending",
      });
      await newClient.save();
    }

    return res.status(201).json({
      message: MSG.signupSuccess,
      success: true,
    });

  } catch (err) {
    console.log(err);
    let errorMsg = MSG.signupError;
    if (err.isJoi === true) {
      errorMsg = err.message;
    }
    return res.status(500).json({
      message: errorMsg,
      success: false,
    });
  }
};

module.exports = register;