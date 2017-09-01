/**
 *  First steps of the project
 *  1. npm init to create the project and dependencies(This creates the package.json)
 *  2.define the npm run scripts of json file
 *      "dev":"nodemon", -> npm run dev
        "production": "pm2 start loader.js --name backend" ->  npm run production
    3. create .gitignore to node_modules and other files that can be installed via dependencies
    4. the loader.js holds together the main backend modules calls
        4.1 creates the server
        4.2 create mongodb connection
        4.3 defines the server url routes
    5. Then we create the billingCycle db schema using node-restful api
    
 * 
 */

//require the file that configures the server ports, middlewares and connections
server = require('./config/server')
//require the file the configures the data base connection
require('./config/database')

require('./config/routes')(server)