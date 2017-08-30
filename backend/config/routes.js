const express = require('express')


//This module returns a function with server as its parameter
//to use this module just use require('routes.js')(server)
module.exports = function(server){
    const router = express.Router() //returns a router middleware

    server.use('/api',router) //whenever /api is passed the router middleware has to be executed first

    const BillingCycleService = require('../api/billingCycle/billingCycleService')
    BillingCycleService.register(router,'BillingCycle')
}