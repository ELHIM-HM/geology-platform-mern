
const Event = require('./../models/eventModel')




exports.getEvents = async (req , res)=>{
    try{
        const events = await Event.find()

        res.status(200).json(events)

    }catch(err){
        res.status(404).json({
            message : err.message
        })
    }
}

