const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

//middleware function to calculate all billing cycle credits and debts
/**
 * Mongo Aggregation operations process data records and return computed results.
 *  Aggregation operations group values from multiple documents together,
 *  and can perform a variety of operations on the grouped data to return a single result.
 *  MongoDB provides three ways to perform aggregation: the aggregation pipeline,
 * the map-reduce function, and single purpose aggregation methods.
 * @param {*} req 
 * @param {*} res billingCycles summary
 */
function getSummary(req,res){
    BillingCycle.aggregate(
    {
        //Pipeline Stage 1
        $project: {
            credit:{$sum : "$credits.value"},
            debit:{$sum:"$debts.value"}
        }
    },
    {
        //Pipeline Stage 2
        $group: {
            _id:null,
            credit:{$sum:"$credit"},
            debit:{$sum:"$debit"}
        }
    },{
        //Pipeline Stage 3
        $project:{
            _id:0,
            credit:1,
            debit:1
        }
    },
    //result function
    function(error,result){
        if(error){
            res.status(500).json({errors:[error]})
        }
        else{
            res.json(_.defaults(result[0],{credit:0,debit:0}))
        }
    })
}

//ES6 each module is a file
//we use the reduced obj reference to export the function getsummary
module.exports = {getSummary}