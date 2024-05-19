// profile controller 
const FreelacerSchema = require("../../models/Freelancer");
const KycSchema = require("../../models/kyc");
const JobSchema = require("../../models/Job");
// const ShiftSchema = require("../../models/Shift");
const WorkSchema = require("../../models/Work");
const multer = require('multer');
const path = require('path');

// Configure storage for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.env.FILE_UPLOAD_PATH); // Ensure this path exists
    },
    filename: (req, file, cb) => {
        // Create a unique file name with the current timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

// Initialize upload middleware
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image')) {
            cb(null, true);
        } else {
            cb(new Error('Please upload an image file'), false);
        }
    },
    limits: { fileSize: process.env.MAX_FILE_UPLOAD }
}).single('file'); // 'file' is the name of the form field


const profile = async (req, res) => {
    try {

        const profile = await FreelacerSchema.findOne({ user: req.user.id }).populate("user", ["name", "email", "role"]);

        if (!profile) {
            return res.status(400).json({
                success: false,
                msg: "There is no profile for this user",
                data: []
            });
        }

        return res.json({
            success: true,
            msg: "Profile fetched successfully",
            data: profile
        });

    }
    catch (err) {
        console.error(err.message);
        res.status(500).send({
            success: false,
            msg: "Server Error",
            data: []
        });
    }
}


const createProfile = async (req, res) => {

    try {
        const dob = new Date(req.body.dob);
        const { phoneNumber } = req.body;
        const profileFields = {
            user: req.user.id,
            phoneNumber,
            dob
        };
        const freelancer = new FreelacerSchema(profileFields);

        const profile = await freelancer.save();
        res.json({
            success: true,
            msg: "Profile created successfully",
            data: profile
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send({
            success: false,
            msg: "Server Error",
            data: []
        });
    }
}

// const uploadAvatar = async (req, res) => {
//     try {

//         const profile = await FreelacerSchema.findOne({ user: req.user.id });

//         if (!profile) {
//             return res.status(400).json({
//                 success: false,
//                 msg: "There is no profile for this user",
//                 data: []
//             });
//         }

//         console.log(req);

//         if (!req.files) {
//             return res.status(400).json({
//                 success: false,
//                 msg: "Please upload a file",
//                 data: []
//             });
//         }

//         const file = req.files.file;
//         if (!file.mimetype.startsWith('image')) {
//             return res.status(400).json({
//                 success: false,
//                 msg: "Please upload an image file",
//                 data: []
//             });
//         }

//         if (file.size > process.env.MAX_FILE_UPLOAD) {
//             return res.status(400).json({
//                 success: false,
//                 msg: `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
//                 data: []
//             });
//         }


//         // save the file to /uploads/avatars

//         file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
//             if (err) {
//                 console.error(err);
//                 return res.status(500).json({
//                     success: false,
//                     msg: "Server Error",
//                     data: []
//                 });
//             }

//             await FreelacerSchema.findByIdAndUpdate(profile._id, { avatar: file.name });

//             res.json({
//                 success: true,
//                 msg: "File uploaded successfully",
//                 data: file.name
//             });
//         });
//     }
//     catch (err) {
//         console.error(err.message);
//         res.status(500).send({
//             success: false,
//             msg: "Server Error",
//             data: []
//         });
//     }
// }

const uploadAvatar = async (req, res) => {
    try{

        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msg: err.message,
                    data: []
                });
            }
            
            if (!req.file) {
                return res.status(400).json({
                    success: false,
                    msg: "Please upload a file",
                    data: []
                });
            }
            
            const profile = await FreelacerSchema.findOne({ user: req.user.id });
            
            if (!profile) {
                return res.status(400).json({
                    success: false,
                    msg: "There is no profile for this user",
                    data: []
                });
            }
            
            await FreelacerSchema.findByIdAndUpdate(profile._id, { avatar: req.file.filename });
            
            res.json({
                success: true,
                msg: "File uploaded successfully",
                data: req.file.filename
            });
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send({
            success: false,
            msg: "Server Error",
            data: []
        });
    };
}

//id Varification  front image
const upoladfrontId= async(req,res)=>{
        try{
    
            upload(req, res, async (err) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        msg: err.message,
                        data: []
                    });
                }
                
                if (!req.file) {
                    return res.status(400).json({
                        success: false,
                        msg: "Please upload a file",
                        data: []
                    });
                }
                
                const profile = await FreelacerSchema.findOne({ user: req.user.id });
                
                if (!profile) {
                    return res.status(400).json({
                        success: false,
                        msg: "There is no profile for this user",
                        data: []
                    });
                }
                
                await FreelacerSchema.findByIdAndUpdate(profile._id, { id_front: req.file.filename });
                res.json({
                    success: true,
                    msg: "File uploaded successfully",
                    data: req.file.filename
                });
            });
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send({
                success: false,
                msg: "Server Error",
                data: []
            });
        };
    }
    //  =back image upload
    const upoladbackId= async(req,res)=>{
        try{
    
            upload(req, res, async (err) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        msg: err.message,
                        data: []
                    });
                }
                
                if (!req.file) {
                    return res.status(400).json({
                        success: false,
                        msg: "Please upload a file",
                        data: []
                    });
                }
                
                const profile = await FreelacerSchema.findOne({ user: req.user.id });
                
                if (!profile) {
                    return res.status(400).json({
                        success: false,
                        msg: "There is no profile for this user",
                        data: []
                    });
                }
                
                await FreelacerSchema.findByIdAndUpdate(profile._id, { id_back: req.file.filename });
                res.json({
                    success: true,
                    msg: "File uploaded successfully",
                    data: req.file.filename
                });
            });
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send({
                success: false,
                msg: "Server Error",
                data: []
            });
        };
    }
// get All Jobs

const AllJobs= async(req,res)=>{
    const jobs= await JobSchema.find();
        // res.send("HEllo")    
         res.status(201).send({
                success: true,
                msg: "Jobs fetched successfully',",
                data: jobs
            })
      
}

const OneJob= async(req,res)=>{
    const jobId= req.params.id;
    
    const job = await JobSchema.findById(jobId);
    // const shifts = await ShiftSchema.find({job_id:jobId});
    // const shifts = await ShiftSchema.find({job_id:req.params.id}).popul?ate('job',['project']);
    // const jobWithShifts = await JobSchema.findById(jobId).populate('shifts');
    //  console.log(job);
    // console.log(shifts);
    if(job){
        return res.status(200).json({
            success:true,
            message:'Job fetched successfully',
            data:job
        });
    }
    else{
        res.status(500).json({ 
            success:false,
            message:'Failed to fetch job',
            data:[]
        });
    }
}

//workks   
const Work=async(req,res)=>{
    try{

        if(req.body.freelancer_id===""){
            return res.status(400).json({
                success:false,
                message:'Please provide freelancer id',
                data:[]
            });
        }
        if(req.body.job_id===""){
            return res.status(400).json({
                success:false,
                message:'Please provide job id',
                data:[]
            });
        }
        const {freelancer_id,job_id} = req.body;
        //check duplicate job id
        //const workdone = await WorkSchema.find({job_id:job_id});
        let workdone = await WorkSchema.findOne({job_id:job_id});
        if(workdone){
            return res.status(400).json({
                success:false,
                message:'Work already done',
                data:[]
            });
        }
        const work = new WorkSchema({
            freelancer_id,
            job_id
        });
         workdone = await work.save();
        if(workdone){
            return res.status(200).json({
                success:true,
                message:'Work done successfully',
                data:workdone
            });
        }
        else{
            return res.status(500).json({
                success:false,
                message:'Failed to do work',
                data:[]
            });
        }
    }
    catch(error){
        return res.status(500).json({ 
            success:false,
            message:error.message,
            data:[]
        });
    }
}

const Allwork= async(req,res)=>{
    //find all work for freelancer id
    const id=req.params.id;
    let allwork = await WorkSchema.find({freelancer_id:id}).populate('job_id',['user','project','skills','category','additionalBriefing','zipcode','number','contactPersonAtLocation','canBeReachedAt']);
    if(allwork){
        return res.status(200).json({ 
            success:true,
            message:"Api Fatching Successfully",
            data:allwork
        });
    }
} 


module.exports = {
    profile,
    createProfile,
    uploadAvatar,
    AllJobs,
    OneJob,
    Work,
    Allwork,
    upoladfrontId,
    upoladbackId
};