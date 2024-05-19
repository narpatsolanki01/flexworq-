const router = require("express").Router();
const { profile, createProfile, uploadAvatar,AllJobs,OneJob,Work,Allwork,upoladfrontId,upoladbackId} = require("../../Controllers/freelancer");
router.get("/", async (req, res) => {
    return res.send("Freelacer Route running...");
});

router.get("/profile", async (req, res) => {
    await profile(req, res);
});

router.post("/profile", async (req, res) => {
    await createProfile(req, res);
});

router.post("/upload-avatar", async (req, res) => {
    await uploadAvatar(req, res);
});
// id Verification route front image
router.post('/upload-front',async(req,res)=>{
    await upoladfrontId(req,res);
})
// id Verification route back image
router.post('/upload-back',async(req,res)=>{
    await upoladbackId(req,res);
})

// get all Jobs
router.get("/jobs", async (req, res)=>{
    await AllJobs(req, res);
});
//onejob 
router.get("/job/:id", async(req, res)=>{
    await OneJob(req,res);
});
//work
router.post("/work", async(req, res)=>{
    await Work(req,res);
});
//all work
router.get('/applied/:id',async(req,res)=>{
    await Allwork(req,res);
})

module.exports = router;
