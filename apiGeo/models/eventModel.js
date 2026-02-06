

const mongoose = require('mongoose')



const EventSchema = mongoose.Schema({
    title : String  ,
    description : String
})


const Event = mongoose.model('Event', EventSchema)


module.exports = Event 