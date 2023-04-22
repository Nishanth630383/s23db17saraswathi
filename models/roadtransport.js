const mongoose = require("mongoose")
const roadtransportSchema = mongoose.Schema({
    roadtransport_type: {type: String, minlength:1, maxlenght:20},
    roadtransport_name: {type: String, minlength:1, maxlenght:20},
    roadtransport_cost: {type: Number, min:100, maxlenght:100000}
})
module.exports = mongoose.model("roadtransport",
roadtransportSchema)