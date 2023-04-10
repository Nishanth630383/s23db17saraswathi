const mongoose = require("mongoose")
const roadtransportSchema = mongoose.Schema({
    roadtransport_type: String,
    roadtransport_name: String,
    roadtransport_cost: Number
})
module.exports = mongoose.model("roadtransport",
roadtransportSchema)