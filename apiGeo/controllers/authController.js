const Teacher = require('./../models/teacherModel')

exports.signupAsTeacher = async (req , res ,next)=>{
    try{
        const newTeacher = await Teacher.create(req.body)
        res.status(201).json({newTeacher})
    }catch(err){
        res.status(404).json({
            status : 'error',
            message : err.message
        })
    }
}