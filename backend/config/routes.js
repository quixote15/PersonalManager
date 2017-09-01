const express = require('express')


//This module returns a function with server as its parameter
//to use this module just use require('routes.js')(server)
module.exports = function(server){
    const router = express.Router() //returns a router middleware
    //API ROUTE
    //whenever /api is passed the router middleware has to be executed first
    server.use('/api',router) 


    //Alternative routes
    //register all get,post,put,delete methods to this route
    const BillingCycleService = require('../api/billingCycle/billingCycleService')
    BillingCycleService.register(router,'/billingCycles')
    
    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)

}