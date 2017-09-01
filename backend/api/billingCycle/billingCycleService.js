const _ = require('lodash')
const BillingCycle = require('./billingCycle')

//We say here that we are creating the methods to be used on the billingCycles schema
//The node rest will be responsible to create an api for those method and integrate with the express routes
//Next we need to define witch url will access which methods
//This is job for the routes!!
BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new:true,runValidators:true})

BillingCycle.after('post',sendErrorsOrNext).after('put',sendErrorsOrNext)

function sendErrorsOrNext(req,res,next){
    bundle = res.locals.bundle
    if(bundle.errors){
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    }
    else{
        next()
    }
    
}

function parseErrors(nodeRestfulErrors){
    var errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

BillingCycle.route('count',function(req,res,next){
    BillingCycle.count(function(error,value){
        if(error){
            res.status({errors:[error]})
        }
        else{
            res.send({value})
        }
    })
})

module.exports = BillingCycle