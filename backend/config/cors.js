/**
 * Http acess control - this allows our web servive to be used by other aplications
 * Cross oring Http request
 * 
 * CORS (Cross-Origin Resource Sharing) is a system,
 * consisting of transmitting HTTP headers, that determines whether to block 
 * or fulfill requests for restricted resources on a web page from another domain
 * outside the domain from which the resource originated.
 */

module.exports = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next() //middleware wont send a response so call next middleware
}
