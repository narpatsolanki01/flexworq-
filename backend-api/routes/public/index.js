const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.send("Public service running...");
});



module.exports = router;
