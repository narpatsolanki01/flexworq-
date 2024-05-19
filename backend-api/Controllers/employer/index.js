const ClientSchema = require('../../models/Client');
const Job = require('../../models/Job');
const Shift = require('../../models/Shift');
    
//using mutter for file upload
const FreelancerSchema = require('../../models/Freelancer');
const multer = require('multer');
const path = require('path');
const { date } = require('joi');

// Configure storage for Multer

const savePhone = async (req, res) => {

    try {
        const { phone } = req.body;

        if (!phone) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid phone number'
            });
        }

        // phone number validation regex -> start with 6,7,8,9 and total 10 digits

        const re = /^[6-9]\d{9}$/;
        if (!re.test(phone)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid phone number'
            });
        }

        const client = await ClientSchema.findOne({ user: req.user.id });

        if (!client) {
            return res.status(400).json({
                success: false,
                message: 'Client not found'
            });
        }

        client.phoneNumber = phone;
        await client.save();

        // save phone number to database

        return res.status(200).json({
            success: true,
            message: 'Phone number saved successfully'
        });

    } catch (error) {
        console.error('savePhone:', error);
        return res.status(500).json({ message: 'Failed to save phone number' });
    }
}

// create a new job use Job Model 
const Addjob = async (req, res) => {
        //validing the request
    if (!req.body.project || !req.body.category || !req.body.additionalBriefing || !req.body.zipcode ||!req.body.skills || !req.body.number || !req.body.contactPersonAtLocation || !req.body.canBeReachedAt) {
            return res.status(400).json({
                success: false,
                message: 'Please enter all fields'
            });
        }
    try {
        const { project, category, additionalBriefing,contactPersonAtLocation, canBeReachedAt,number,zipcode } = req.body;
        const job = new Job({
            client: req.client.id,
            user: req.user.id,
            project,
            category,
            skills:req.body.skills,
            additionalBriefing,
            zipcode,
            number,
            contactPersonAtLocation,
            canBeReachedAt
        });
        await job.save();
        return res.status(200).json({
            success: true,
            message: 'Job added successfully'
        });
    } catch (error) {
        console.error('add_job:', error);
        return res.status(500).json({ 
            success:false,
            message:'Failed to fetch job',
            data:[]
         });
    }
}
const Alljob= async(req,res)=>{
    const jobs = await Job.find();
    if(jobs){
       return res.status(200).json({
            success:true,
            message:'Jobs fetched successfully',
            data:jobs
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

const show= async(req,res)=>{
    const job = await Job.findById(req.params.id);
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

const addshift= async(req,res)=>{

    if(!req.body.job || !req.body.duration_to || !req.body.duration_from || !req.body.price){
        return res.status(400).json({
            success:false,
            message:'Please enter all fields'
        });
    }
    try{
        const {job,duration_to,duration_from,price} = req.body;

        // console.log(d_from,d_to);
        const shift = new Shift({
            job_id:job,
            duration_from,
            duration_to,
            price
        });
        await shift.save();
        return res.status(200).json({
            success:true,
            message:'Shift added successfully'
        });
    }
    catch(error){
        console.error('add_shift:', error);
        return res.status(500).json({ 
            success:false,
            message:error.message,
            data:[]
         });
    }

}
// all shift
const Allshift= async(req,res)=>{
    try{
        // const jobfind= await Job.find({_id:job});
        const shifts = await Shift.find();
        return res.status(200).json({
            success:true,
            message:'Shift fetched successfully',
            data:shifts
        });
    }
    catch(error){
        return res.status(500).json({ 
            success:false,
            message:error.message,
            data:[]
         });
    }
    
}

module.exports = {
    savePhone,Addjob,Alljob,show,addshift,Allshift
}
