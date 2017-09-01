//In here we create a mapping object-document for the billingcycles
const restful = require('node-restful') //provide an rest api to the frontend
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name:{type:String, required:true},
    value: {type: Number, required:true}
})

const debtSchema = new mongoose.Schema({
    name:{type:String, required:true},
    value: {type: Number, min: 0,required:true},
    status:{type: String, required:true, uppercase:true,
    enum:['PAGO','PENDENTE','AGENDADO']}
})


const billingCycleSchema = new mongoose.Schema({
    name:{type:String, required:true},
    month: {type: Number,min:1,max:12, required:[true,"mês é obrigatório!"]},
    year: {type: Number,min:[1970,"O ano tem que ser maior que 1970"],max:2100, required:true},
    credits: [creditSchema],
    debts: [debtSchema]
})

//this schema can be used by other modules using the require
module.exports = restful.model('BillingCycle',billingCycleSchema)