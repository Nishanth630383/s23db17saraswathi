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
    };
// Handle roadtransport delete on DELETE.
exports.roadtransport_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await roadtransport.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle roadtransport update form on PUT.
exports.roadtransport_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await roadtransport.findById( req.params.id)
    // Do updates of properties
    if(req.body.roadtransport_type)
    toUpdate.roadtransport_type = req.body.roadtransport_type;
    if(req.body.roadtransport_name) toUpdate.roadtransport_name = req.body.roadtransport_name;
    if(req.body.roadtransport_cost) toUpdate.roadtransport_cost = req.body.roadtransport_cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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
// Handle a show one view with id specified by query
exports.roadtransport_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await roadtransport.findById( req.query.id)
    res.render('roadtransportdetail',
   { title: 'Roadtransport Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };