var express = require('express');
const roadtransport_controlers= require('../controllers/roadtransport');
var router = express.Router();

/*class roadtransport{
    constructor(roadtransport_type, roadtransport_name, roadtransport_cost){
        this.roadtransport_type=roadtransport_type;
        this.roadtransport_name=roadtransport_name;
        this.roadtransport_cost=roadtransport_cost;
    }
}

/* GET home page. 
router.get('/', function(req, res, next) {
    let r1= new roadtransport('2 wheeler','Bike',10000);
    let r2= new roadtransport('4 wheeler','Car',50000);
    let r3= new roadtransport('6 wheeler','Truck',100000);
  res.render('roadtransport', { title: 'Search Results Road Transport',roadtransport : [r1,r2,r3] });
});*/
router.get('/', roadtransport_controlers.roadtransport_view_all_Page );

/* GET detail roadtransport page */
router.get('/detail', roadtransport_controlers.roadtransport_view_one_Page);
module.exports = router;
