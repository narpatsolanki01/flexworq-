const router = require("express").Router();
const { ROLE } = require("../../config/roles");
// Bring in the User Registration function
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
} = require("../../Controllers/auth");

router.get("/", async (req, res) => {
  return res.send("Auth service running...");
});

// Users Registeration Route
router.post("/signup-freelancer", async (req, res) => {
  await userRegister(req.body, ROLE.freelancer, res);
});

router.post("/signup-client", async (req, res) => {
  await userRegister(req.body, ROLE.client, res);
});

// Admin Registration Route
router.post("/signup-admin", async (req, res) => {
  await userRegister(req.body, ROLE.admin, res);
});

// Users Login Route
router.post("/login-client", async (req, res) => {
  await userLogin(req.body, ROLE.client, res);
});

router.post("/login-freelancer", async (req, res) => {
  await userLogin(req.body, ROLE.freelancer, res);
});

// Admin Login Route
router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, ROLE.admin, res);
});


// Super Admin Protected Route
// router.get("/admin-protected", userAuth, checkRole([ROLE.freelancer]), async (req, res) => {
//   return res.json("Hello Super Admin");
// });




module.exports = router;
