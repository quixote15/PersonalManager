const BillingCycle = require('./billingCycle')
//We say here that we are creating the methods to be used on the billingCycles schema
//The node rest will be responsible to create an api for those method and integrate with the express routes
//Next we need to define witch url will access which methods
//This is job for the routes!!
BillingCycle.methods(['get','post','put','delete'])


module.exports = BillingCycle