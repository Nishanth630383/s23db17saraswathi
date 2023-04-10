var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var roadtransport_controller = require('../controllers/roadtransport');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// roadtransport ROUTES ///
// POST request for creating a roadtransport.
router.post('/roadtransport', roadtransport_controller.roadtransport_create_post);
// DELETE request to delete roadtransport.
router.delete('/roadtransport/:id', roadtransport_controller.roadtransport_delete);
// PUT request to update roadtransport.
router.put('/roadtransport/:id', roadtransport_controller.roadtransport_update_put);
// GET request for one roadtransport.
router.get('/roadtransport/:id', roadtransport_controller.roadtransport_detail);
// GET request for list of all roadtransport items.
router.get('/roadtransport', roadtransport_controller.roadtransport_list);
module.exports = router;