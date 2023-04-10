var roadtransport = require('../models/roadtransport');
// List of all roadtransport
exports.roadtransport_list = async function(req, res) {
    try{
    roadtransport = await roadtransport.find();
    res.send(roadtransport);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // for a specific roadtransport.
exports.roadtransport_detail = function(req, res) {
res.send('NOT IMPLEMENTED: roadtransport detail: ' + req.params.id);
};
// Handle roadtransport create on POST.
exports.roadtransport_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: roadtransport create POST');
};
// Handle roadtransport delete form on DELETE.
exports.roadtransport_delete = function(req, res) {
res.send('NOT IMPLEMENTED: roadtransport delete DELETE ' + req.params.id);
};
// Handle roadtransport update form on PUT.
exports.roadtransport_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: roadtransport update PUT' + req.params.id);
};
