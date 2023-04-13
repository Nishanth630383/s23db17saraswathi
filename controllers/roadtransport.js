var roadtransport = require('../models/roadtransport');
// List of all roadtransport
exports.roadtransport_list = async function(req, res) {
    try{
    results = await roadtransport.find();
    res.send(results);
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
exports.roadtransport_create_post = async function(req, res) {
    console.log(req.body)
    let document = new roadtransport();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"roadtransport_type":"goat", "cost":12, "size":"large"}
    document.roadtransport_type = req.body.roadtransport_type;
    document.roadtransport_name = req.body.roadtransport_name;
    document.roadtransport_cost = req.body.roadtransport_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };// Handle roadtransport delete form on DELETE.
exports.roadtransport_delete = function(req, res) {
res.send('NOT IMPLEMENTED: roadtransport delete DELETE ' + req.params.id);
};
// Handle roadtransport update form on PUT.
exports.roadtransport_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: roadtransport update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.roadtransport_view_all_Page = async function(req, res) {
    try{
    theroadtransport = await roadtransport.find();
    res.render('roadtransport', { title: 'roadtransport Search Results', results: theroadtransport });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

exports.roadtransport_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await roadtransport.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };