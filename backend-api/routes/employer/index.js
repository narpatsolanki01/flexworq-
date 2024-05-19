const router = require("express").Router();
const { savePhone,Addjob,Alljob,show,addshift,Allshift} = require("../../Controllers/employer");

router.get("/", async (req, res) => {
    return res.send("Employer Route running...");
});
router.post("/phone", async (req, res) => {
    await savePhone(req, res);
});
router.post("/addjob", async (req, res)=>{
    await Addjob(req, res);
});
router.get("/jobs", async (req, res)=>{
    await Alljob(req, res);
});
router.get("/job/:id", async (req, res)=>{
    // res.send("Employer Route running...");
    await show(req, res);
});

//shift routes
router.post("/addshift", async (req, res)=>{
    await addshift(req, res);
});
router.get("/shifts", async (req, res)=>{
    await Allshift(req, res);
});
module.exports = router;
